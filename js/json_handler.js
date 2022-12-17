const fs = require('fs');
const os = require('os');
const path = require('path');

let debug_mode = false;
let client_id = null;

function set_debug_state(enable_debug) {
  debug_mode = enable_debug;
}

function print_json(type, message, value = "") {
  if (type === "debug" && !debug_mode) {
    return;
  }

  if (value === "") {
    console.log(JSON.stringify({type, message}));
  } else {
    console.log(JSON.stringify({type, message: {[message]: value}}));
  }
}

function set_token_client_id(id_to_set) {
  if (!id_to_set) {
    throw new Error('id_to_set must not be null or undefined');
  }
  print_json("debug", "Setting client ID", id_to_set);
  client_id = id_to_set;
}

function tokens_file_name() {
  if (!client_id) {
    throw new Error('client_id must not be null or undefined');
  }
  return `tokens-${client_id}.json`;
}

function tokens_file_path() {
  return path.join(path.dirname(path.realpath(__filename)), tokens_file_name());
}

function tokens_file_exists() {
  if (fs.existsSync(tokens_file_path())) {
    print_json("debug", `'${tokens_file_name()}' exists`);
    return true;
  } else {
    print_json("debug", `'${tokens_file_name()}' does not exist`);
    return false;
  }
}

async function read_tokens() {
  print_json("status", "Attempting to read tokens");

  if (!tokens_file_exists()) {
    print_json("error", `'${tokens_file_name()}' does not exist`);
    process.exit(1);
  }

  print_json("debug", `Reading from '${tokens_file_name()}'`);

  try {
    let AccToken = null;
    let RefToken = null;
    let Expires = null;

    const data = JSON.parse(fs.readFileSync(tokens_file_path()));
    AccToken = data["ACC_TOK"];
    RefToken = data["REF_TOK"];
    Expires = data["EXPIRES_AT"];
  } catch (error) {
    print_json("error", `Cannot read '${tokens_file_name()}'`);
    process.exit(1);
  }

  if (!AccToken) {
    print_json("error", `Cannot read access_token from '${tokens_file_name()}'`);
    process.exit(1);
  }

  if (!RefToken) {
    print_json("error", `Cannot read refresh_token from '${tokens_file_name()}'`);
    process.exit(1);
  }

  if (!Expires) {
    print_json("error", `Cannot read expires_at from '${tokens_file_name()}'`);
    process.exit(1);
  }

  print_json("status", "Tokens read successfully");
  return {AccToken, RefToken, Expires};
}

function write_tokens(AccToken, RefToken, Expires = null) {
  print_json("status", "Attempting to write tokens");

  print_json("debug", `Writing tokens to '${tokens_file_name()}'`);

  const debug_print_out = `Writing access token: '${AccToken}', refresh token: '${RefToken}' and expiry Unix timestamp: '${Expires}'`;
  print_json("debug", debug_print_out);

  const data = {
    ACC_TOK: AccToken,
    REF_TOK: RefToken,
    EXPIRES_AT: Expires,
  };

  fs.writeFileSync(tokens_file_path(), JSON.stringify(data));

  print_json("status", "Tokens written successfully");
}

module.exports = {
  set_debug_state,
  set_token_client_id,
  read_tokens,
  write_tokens,
};
