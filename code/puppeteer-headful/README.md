# puppeteer headful demo
nodejs puppeteer headful demo

# Build
```
docker image build -t puppeteer-demo:v3 ./
docker run -i --init --rm --cap-add=SYS_ADMIN --mount type=bind,source=/media/psf/work/tt_test/code/docker,target=/home/pptruser/Downloads puppeteer-demo:v3 node test.js
```
