
function navigate(section) {
  const content = document.getElementById('content');
  if (section === 'notes') {
    content.innerHTML = '<h2>Notes</h2><p>Select a subject:</p><ul><li>Biology</li><li>Chemistry</li><li>Physics</li></ul>';
  } else if (section === 'exam') {
    content.innerHTML = '<h2>Exam</h2><p>Select subject and number of questions.</p>';
  } else if (section === 'search') {
    content.innerHTML = '<h2>Search</h2><p>What do you want to search?</p>';
  } else if (section === 'about') {
    content.innerHTML = '<h2>About</h2><p>এটি একটি শিক্ষা সহায়ক প্ল্যাটফর্ম, যেখানের কনটেন্ট শিক্ষার্থীদের সুবিধার্থে প্রকাশ করা হয়েছে।</p><p><strong>Sheikh Remon</strong>, MBBS Student, CMC</p>';
  }
}
