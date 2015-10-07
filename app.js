(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Marcus\\Desktop\\Redskins\\src\\app.jsx":[function(require,module,exports){
// players object that holds an array of playerData objects
var players = {
	playerData: [
		{
			name : "Jordan Reed",
			number : 86,
			position : "TE",
			age : 25,
			experience : 2,
			college : "Florida",
			image : "https://cbswashington.files.wordpress.com/2015/10/gettyimages-491323934.jpg?w=620&h=349&crop=1"
		},
		{
			name : "Pierre Garcon",
			number : 88,
			position : "WR",
			age : 29,
			experience : 8,
			college : "Mount Union",
			image :"http://www.rantsports.com/nfl/files/2015/09/slide41.jpg"
		},
		{
			name : "DeSean Jackson",
			number : 11,
			position : "WR",
			age : 28,
			experience : 8,
			college : "Cal Berkeley",
			image :"http://isportsweb.com/wp-content/uploads//2014/10/jack.jpg"
		},
		{
			name : "Ryan Kerrigan",
			number : 91,
			position : "OLB",
			age : 24,
			experience : 4,
			college : "Purdue",
			image :"http://s3media.247sports.com/Uploads/Assets/830/618/6_3618830.jpg"
		},
	]
};

console.log('HI');

// Using React's cerateElements() method to create the PlayerCard component and store the value in playerCardElement var
var playerCardElement = React.createElement(PlayerPanelCardList, players);

// The React render() method renders the playerCardElement to the specified target area within the html file.
React.render(playerCardElement, document.querySelector('.target'));
},{}]},{},["C:\\Users\\Marcus\\Desktop\\Redskins\\src\\app.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXE1hcmN1c1xcRGVza3RvcFxcUmVkc2tpbnNcXHNyY1xcYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLDJEQUEyRDtBQUMzRCxJQUFJLE9BQU8sR0FBRztDQUNiLFVBQVUsRUFBRTtFQUNYO0dBQ0MsSUFBSSxHQUFHLGFBQWE7R0FDcEIsTUFBTSxHQUFHLEVBQUU7R0FDWCxRQUFRLEdBQUcsSUFBSTtHQUNmLEdBQUcsR0FBRyxFQUFFO0dBQ1IsVUFBVSxHQUFHLENBQUM7R0FDZCxPQUFPLEdBQUcsU0FBUztHQUNuQixLQUFLLEdBQUcsZ0dBQWdHO0dBQ3hHO0VBQ0Q7R0FDQyxJQUFJLEdBQUcsZUFBZTtHQUN0QixNQUFNLEdBQUcsRUFBRTtHQUNYLFFBQVEsR0FBRyxJQUFJO0dBQ2YsR0FBRyxHQUFHLEVBQUU7R0FDUixVQUFVLEdBQUcsQ0FBQztHQUNkLE9BQU8sR0FBRyxhQUFhO0dBQ3ZCLEtBQUssRUFBRSx5REFBeUQ7R0FDaEU7RUFDRDtHQUNDLElBQUksR0FBRyxnQkFBZ0I7R0FDdkIsTUFBTSxHQUFHLEVBQUU7R0FDWCxRQUFRLEdBQUcsSUFBSTtHQUNmLEdBQUcsR0FBRyxFQUFFO0dBQ1IsVUFBVSxHQUFHLENBQUM7R0FDZCxPQUFPLEdBQUcsY0FBYztHQUN4QixLQUFLLEVBQUUsNERBQTREO0dBQ25FO0VBQ0Q7R0FDQyxJQUFJLEdBQUcsZUFBZTtHQUN0QixNQUFNLEdBQUcsRUFBRTtHQUNYLFFBQVEsR0FBRyxLQUFLO0dBQ2hCLEdBQUcsR0FBRyxFQUFFO0dBQ1IsVUFBVSxHQUFHLENBQUM7R0FDZCxPQUFPLEdBQUcsUUFBUTtHQUNsQixLQUFLLEVBQUUsbUVBQW1FO0dBQzFFO0VBQ0Q7QUFDRixDQUFDLENBQUM7O0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEIsd0hBQXdIO0FBQ3hILElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFMUUsNkdBQTZHO0FBQzdHLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHBsYXllcnMgb2JqZWN0IHRoYXQgaG9sZHMgYW4gYXJyYXkgb2YgcGxheWVyRGF0YSBvYmplY3RzXHJcbnZhciBwbGF5ZXJzID0ge1xyXG5cdHBsYXllckRhdGE6IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZSA6IFwiSm9yZGFuIFJlZWRcIixcclxuXHRcdFx0bnVtYmVyIDogODYsXHJcblx0XHRcdHBvc2l0aW9uIDogXCJURVwiLFxyXG5cdFx0XHRhZ2UgOiAyNSxcclxuXHRcdFx0ZXhwZXJpZW5jZSA6IDIsXHJcblx0XHRcdGNvbGxlZ2UgOiBcIkZsb3JpZGFcIixcclxuXHRcdFx0aW1hZ2UgOiBcImh0dHBzOi8vY2Jzd2FzaGluZ3Rvbi5maWxlcy53b3JkcHJlc3MuY29tLzIwMTUvMTAvZ2V0dHlpbWFnZXMtNDkxMzIzOTM0LmpwZz93PTYyMCZoPTM0OSZjcm9wPTFcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZSA6IFwiUGllcnJlIEdhcmNvblwiLFxyXG5cdFx0XHRudW1iZXIgOiA4OCxcclxuXHRcdFx0cG9zaXRpb24gOiBcIldSXCIsXHJcblx0XHRcdGFnZSA6IDI5LFxyXG5cdFx0XHRleHBlcmllbmNlIDogOCxcclxuXHRcdFx0Y29sbGVnZSA6IFwiTW91bnQgVW5pb25cIixcclxuXHRcdFx0aW1hZ2UgOlwiaHR0cDovL3d3dy5yYW50c3BvcnRzLmNvbS9uZmwvZmlsZXMvMjAxNS8wOS9zbGlkZTQxLmpwZ1wiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lIDogXCJEZVNlYW4gSmFja3NvblwiLFxyXG5cdFx0XHRudW1iZXIgOiAxMSxcclxuXHRcdFx0cG9zaXRpb24gOiBcIldSXCIsXHJcblx0XHRcdGFnZSA6IDI4LFxyXG5cdFx0XHRleHBlcmllbmNlIDogOCxcclxuXHRcdFx0Y29sbGVnZSA6IFwiQ2FsIEJlcmtlbGV5XCIsXHJcblx0XHRcdGltYWdlIDpcImh0dHA6Ly9pc3BvcnRzd2ViLmNvbS93cC1jb250ZW50L3VwbG9hZHMvLzIwMTQvMTAvamFjay5qcGdcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZSA6IFwiUnlhbiBLZXJyaWdhblwiLFxyXG5cdFx0XHRudW1iZXIgOiA5MSxcclxuXHRcdFx0cG9zaXRpb24gOiBcIk9MQlwiLFxyXG5cdFx0XHRhZ2UgOiAyNCxcclxuXHRcdFx0ZXhwZXJpZW5jZSA6IDQsXHJcblx0XHRcdGNvbGxlZ2UgOiBcIlB1cmR1ZVwiLFxyXG5cdFx0XHRpbWFnZSA6XCJodHRwOi8vczNtZWRpYS4yNDdzcG9ydHMuY29tL1VwbG9hZHMvQXNzZXRzLzgzMC82MTgvNl8zNjE4ODMwLmpwZ1wiXHJcblx0XHR9LFxyXG5cdF1cclxufTtcclxuXHJcbmNvbnNvbGUubG9nKCdISScpO1xyXG5cclxuLy8gVXNpbmcgUmVhY3QncyBjZXJhdGVFbGVtZW50cygpIG1ldGhvZCB0byBjcmVhdGUgdGhlIFBsYXllckNhcmQgY29tcG9uZW50IGFuZCBzdG9yZSB0aGUgdmFsdWUgaW4gcGxheWVyQ2FyZEVsZW1lbnQgdmFyXHJcbnZhciBwbGF5ZXJDYXJkRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGxheWVyUGFuZWxDYXJkTGlzdCwgcGxheWVycyk7XHJcblxyXG4vLyBUaGUgUmVhY3QgcmVuZGVyKCkgbWV0aG9kIHJlbmRlcnMgdGhlIHBsYXllckNhcmRFbGVtZW50IHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0IGFyZWEgd2l0aGluIHRoZSBodG1sIGZpbGUuXHJcblJlYWN0LnJlbmRlcihwbGF5ZXJDYXJkRWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpKTtcclxuIl19
