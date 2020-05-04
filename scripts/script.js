var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.courseData.length; i++) { // Loop through object
      newContent += '<div class="exams">';
      newContent += '<h4>' + responseObject.courseData[i].exam + '</h4> ';
      newContent += '<ol>';
      newContent += '<li>' + responseObject.events[i].twoexam + '</li>';
      newContent += '<li>' + responseObject.events[i].noncumul + '</li>';
      newContent += '<li>' + responseObject.events[i].proctored + '</li>';
      newContent += '<li>' + responseObject.events[i].devices + '</li>';
      newContent += '</ol>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('syllabus').innerHTML = newContent;

  //}
};

xhr.open('GET', './data/finalSyllabus.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
