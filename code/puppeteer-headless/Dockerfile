FROM node:16.15.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN apt-get update \
    && apt-get install chromium -y \
    && apt-get install -y fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Install puppeteer so it's available in the container.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && mkdir -p /home/pptruser/app \
    && chown -R pptruser:pptruser /home/pptruser

COPY . /home/pptruser/app
WORKDIR /home/pptruser/app
RUN ["npm", "install", "-g", "npm@8.10.0"]
RUN ["npm", "install"]
# Run everything after as non-privileged user.
USER pptruser

CMD [ "chromium" ]