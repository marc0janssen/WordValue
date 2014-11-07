include('wordvalue.js');

// function run()
// {
//     // No argument passed, just open the website:
//     // LaunchBar.openURL('http://www.youtube.com/');
// }

function runWithString(argument)
{
	return wordvalue(argument);
}

function runWithItem(item)
{
	return wordvalue(item.title);
}