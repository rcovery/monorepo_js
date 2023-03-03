printf "\n\x1B[4mProduction script provided by\033[0m \033[4;38;2;197;63;209mRCovery\033[0m\n\n"

# TODO Check build files and exit 1 if not exist

pm2 delete all
pm2 start
