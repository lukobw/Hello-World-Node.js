console.log("'To find node version type 'ver', to find user language type 'lang', to exit type 'exit'\n");

process.stdin.setEncoding('UTF-8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();
    
    if(input !== null) {
        var instruction = input.toString().trim();
        
        switch(instruction) {
            case 'ver':
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break;
            case 'lang':
                process.stdout.write('Language: ' + process.env.LANG + '\n');
                break;
            case 'exit':
                process.stdout.write('Goodbye!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});
