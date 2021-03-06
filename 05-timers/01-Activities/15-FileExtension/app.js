// You have an array of filenames with extensions.
// Sort the files into arrays based on whether or not they are videos or images.
var files = ["pavans_first_birthday.mov",
  "owens_asleep_at_the_computer.jpg",
  "michael_fights_a_polar_bear.mp4",
  "nate_road_rage.avi",
  "ruby_skydiving.jpeg",
  "ken_getting_his_black_belt.png",
  "dan_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

// We set up arrays for all possible file extensions.
var imageExtentions = ["jpg", "gif", "png", "jpeg"];
var videoExtensions = ["move", "avi", "mp4", "mpg"];

// We create arrays where we can place our results.
var images = [];
var videos = [];

var extensionSorter = function (fileArray) {
    for(var i = 0; i < fileArray.length; i++) {
        var fileExt = fileArray[i].split(".").pop();
        console.log(fileExt);

        // Now we check the file extension against our array of possible image extensions.
        if(imageExtentions.indexOf(fileExt) !== -1) {
            images.push(fileArray[i]);
            //console.log(images);
        }
        else if (videoExtensions.indexOf(fileExt) !== -1) {
            videos.push(fileArray[i]);
            //console.log(videos);
        }
    }
    console.log(videos);
    console.log(images);
}

extensionSorter(files);