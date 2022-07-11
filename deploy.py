import subprocess
subprocess.call("npm run build", shell = True)
subprocess.call(" firebase deploy --only hosting:codechefpccoe", shell = True)