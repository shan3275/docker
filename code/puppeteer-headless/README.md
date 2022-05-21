# express web server demo
nodejs express web server hello world demo

# Build
```
docker image build -t puppeteer-demo:v1 ./
docker run -i --init --rm --cap-add=SYS_ADMIN --mount type=bind,source=/media/psf/work/tt_test/code/docker,target=/home/pptruser/Downloads puppeteer-demo:v1 node -e "`cat test.js`"
```