var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.courseData.length; i++) { // Loop through object
      newContent += '<div class="exams">';
      newContent += '<u><h4>' + responseObject.courseData[i].exam + '</h4></u> ';
      newContent += '<ul>';
      newContent += '<li>' + responseObject.courseData[i].twoexam + '</li>';
      newContent += '<li>' + responseObject.courseData[i].noncumul + '</li>';
      newContent += '<li>' + responseObject.courseData[i].proctored + '</li>';
      newContent += '<li>' + responseObject.courseData[i].devices + '</li>';
      newContent += '</ul>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('syllabus').innerHTML = newContent;

  //}
};

xhr.open('GET', 'https://desya42.github.io/folkertsFinal/data/finalSyllabus.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
