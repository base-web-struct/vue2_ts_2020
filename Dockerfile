# FROM reg.zzcrowd.com/base/nginx-vts:1.16.1-0.1.18
FROM reg.zzcrowd.com/base/nginx-vts:1.16.1-0.1.18-apollo-agent
ARG VERSION

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./dist/ /usr/share/nginx/html/
COPY ./deploy/default.conf /etc/nginx/conf.d/default.conf

# RUN echo $VERSION > /VERSION
ARG COMMIT_ID=100001 
RUN echo "${COMMIT_ID}" >> /Version

EXPOSE 80