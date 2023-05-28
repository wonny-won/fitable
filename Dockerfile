# 웬만하면 도커 캐시에서 처리될 부분 - 리눅스, 노드, 패키지 매니저, package.json 
FROM node
COPY ./package.json /fitable/
COPY ./yarn.lock /fitable/
WORKDIR /fitable/
RUN yarn install
# 소스코드 복사 -> 자주 바뀌는 부분은 캐시가 아닌 새롭게 빌드
COPY . /fitable/
RUN yarn build
# 실행부 -> 도커 이미지에 상관없음(최적화에 상관없음)
CMD yarn start
