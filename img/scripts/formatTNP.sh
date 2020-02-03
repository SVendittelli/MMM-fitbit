#!/bin/bash

# Take "The Noun Project" icons, make them square, white and transparent

for f in *.png; do
	echo "${f}"

	# Crop bottom of image
	convert -crop -0-85 "${f}" "${f}"

	# Remove surrounding whitespace
	convert -trim "${f}" "${f}"

	width=$(identify -format "%w" "${f}")
	height=$(identify -format "%h" "${f}")

	max=$(( width > height ? width : height ))

	# Make square; side-effect: white background
	mogrify -gravity center -extent "${max}x${max}" "${f}"

	# Remove white background
	convert "${f}" -fuzz 2% -transparent white "${f}"

	# Invert to white
	convert "${f}" -channel RGB -negate "${f}"
done
