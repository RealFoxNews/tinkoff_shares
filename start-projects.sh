#!/bin/bash

cd /workspaces/tinkoff_shares/backend
nohup nest start > backend.log 2>&1 &

cd /workspaces/tinkoff_shares/frontend
nohup ng serve --host 0.0.0.0 --port 4200 > frontend.log 2>&1 &
