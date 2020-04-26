#!/bin/bash

function _gclone(){
    cd ../
	if [[ -d $1 ]]; then
		echo '已经存在 '$1', 跳过'
	else
		echo '开始克隆 '$1
		git clone 
		echo $1' 克隆完毕'
	fi
}

REPO_LIST=''

echo '前端项目 初始化开始'
echo

for REPO in $REPO_LIST; do {
	_gclone $REPO
} &
done

wait
echo
echo '前端项目 初始化完毕'
