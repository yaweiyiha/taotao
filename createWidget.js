var fs = require("fs");

var arguments = process.argv.splice(2);
if (arguments.length === 0) {
	console.log('missing directory name param');
	process.exit();
}

var widget = arguments[0];

var htmlTpl = [];
htmlTpl.push('<div class="styleguide admin-widget-' + widget + '">');
htmlTpl.push('');
htmlTpl.push('</div>');
htmlTpl = htmlTpl.join('\n');

var styleTpl = [];
styleTpl.push('.admin-widget-' + widget + ' {');
styleTpl.push('');
styleTpl.push('}');
styleTpl = styleTpl.join('\n');

var jsTpl = [];
jsTpl.push("let style = __inline('./" + widget + ".inline.less');");
jsTpl.push("let tpl = __inline('./" + widget + ".tpl');");
jsTpl.push("");
jsTpl.push("require.loadCss({");
jsTpl.push("    name: 'admin-widget-" + widget + "-style',");
jsTpl.push("    content: style");
jsTpl.push("});");
jsTpl.push("");
jsTpl.push("export default Vue.component('" + widget + "', {");
jsTpl.push(" 	template: tpl,");
jsTpl.push(" 	init: function () {");
jsTpl.push(" 		//TODO");
jsTpl.push(" 	},");
jsTpl.push("});");
jsTpl = jsTpl.join('\n');


function mkdirSync (dir, mode) {
	mode = mode || 0755;

	if(!fs.existsSync(dir)) {
		fs.mkdirSync(dir, mode)
	} else {
		console.log('Directory [' + dir + '] has existed');
		process.exit();
	}
}

function writeFile (filename, content) {
	fs.open(filename, 'w', '0644', function (e, fd) {
	    
	    if(e) throw e;
	    
	    fs.write(fd, content, function(e){
	        if(e) throw e;
	        fs.closeSync(fd);
	    });
	});
}

mkdirSync('widget/module/' + widget);

writeFile ('widget/module/'+ widget + '/' + widget + '.inline.less', styleTpl);
writeFile ('widget/module/'+ widget + '/' + widget + '.js', jsTpl);
writeFile ('widget/module/'+ widget + '/' + widget + '.tpl', htmlTpl);

console.log('Create Widget Success!');


