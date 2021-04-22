.PHONY: build
SRC_DIR=.
BRANCH=$(GIT_BRANCH)

# 说明
# IMAGE_URL 是镜像名称,已经定义 默认值是reg.zzcrowd.com/{REGISTRY_NAMESPACE}/{PROJECT_NAME}
# REGISTRY_NAMESPACE是项目所在仓库namespace,如本项目为platform
# DOCKER_TAG 是对应镜像tag，已经定义，格式有两种，如直接打tag Docker_tag为具体的版本号，如果无tag就是分支名—commit号
# COMMIT_ID 对应的代码提交号

ifeq ($(findstring staging, $(GIT_BRANCH)), staging)
	BRANCH=staging
endif

build:
	rm -rf dist
	# rm -rf node_modules
	npm install --registry=https://registry.npm.taobao.org

	npm run build:$(BRANCH)

	# docker build -t $(IMAGE_URL):$(DOCKER_TAG) .
	docker build -t $(IMAGE_URL):$(DOCKER_TAG) --build-arg COMMIT_ID=$(COMMIT_ID) --cache-from $(IMAGE_URL):latest .

test:
	echo "Testing for project $(DOCKER_TAG)"
#	docker run --rm $(IMAGE_URL):$(DOCKER_TAG) make test || export UT_FAILED="TRUE"
#	if [ $UT_FAILED ];then exit 1;fi