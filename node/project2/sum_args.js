var sum = 0;
var nums = process.argv.slice(2);
for (index in nums){
	

	sum += (+nums[index]);
}
console.log(sum);
