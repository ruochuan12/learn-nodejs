module.exports = {
    /**
	 * 格式化时间
	 * @author luoxiaochuan <lxchuan12@163.com>
	 * @date 2018-08-25
	 */
	formatTime: function(timeStamp){
		var time = new Date(timeStamp);
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		var date = time.getDate();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds();

		function to2bit(num){
			if(num > 9){
				return num;
			}
			else{
				return '0' + num;
			}
		}
		return year + '-' + to2bit(month) + '-' + to2bit(date) + ' ' + to2bit(hour) + ':' + to2bit(minute) + ':' + to2bit(second);
	},
};