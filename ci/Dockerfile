FROM node:20 AS build-env
COPY /app /app
WORKDIR /app
RUN yarn build

FROM gcr.io/distroless/nodejs20-debian11 
COPY --from=build-env /app/build /app/build
COPY --from=build-env /app/node_modules /app/node_modules
COPY --from=build-env /app/index.js /app/index.js
WORKDIR /app
CMD ["index.js"]