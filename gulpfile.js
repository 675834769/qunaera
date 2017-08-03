var gulp = require("gulp"),
	clearCss = require("gulp-clean-css"),
	htmlMin = require("gulp-htmlmin"),
	rename = require("gulp-rename");

gulp.task("zipCss",function(){
	gulp.src("./qunaer/css/*.css").
		pipe(clearCss()).
		pipe(rename("style1.min.css"))
		.pipe(gulp.dest("./qunaer/css"));
})
gulp.task("zipHtml",function(){
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	}

	gulp.src("./qunaer/index.html")
		.pipe(htmlMin(options))
		.pipe(rename("demo.html"))
		.pipe(gulp.dest("./qunaer"));
})
gulp.task("default",["zipCss","zipHtml"])