const chapters = {
  biology: {
    'Chapter 1: কোষ ও এর গঠন': 'এ অধ্যায়ে কোষের গঠন, অঙ্গাণু ও কাজ সম্পর্কে বিস্তারিত আলোচনা করা হয়েছে।',
    'Chapter 2: কোষ বিভাজন': 'মাইটোসিস ও মিয়োসিসের ধাপ এবং তাৎপর্য তুলে ধরা হয়েছে।'
  },
  chemistry: {
    'Chapter 1: গুণগত রসায়ন': 'ধাতু ও অ-ধাতু শনাক্তকরণ পরীক্ষাগুলো বর্ণনা করা হয়েছে।',
    'Chapter 2: অম্ল ক্ষার': 'অম্ল ও ক্ষারের ধর্ম, pH স্কেল ইত্যাদি আলোচনা করা হয়েছে।'
  },
  physics: {
    'Chapter 1: গতিসংক্রান্ত রাশি': 'বেগ, ত্বরণ, সরণ এসব রাশির সম্পর্ক ও বিশ্লেষণ।',
    'Chapter 2: বল ও নিউটনের সূত্র': 'নিউটনের গতি সূত্র এবং বলের প্রয়োগ আলোচনা করা হয়েছে।'
  }
};

function loadChapters() {
  const subject = document.getElementById('subject-select').value;
  const chapterSelect = document.getElementById('chapter-select');
  const chapterSection = document.getElementById('chapter-section');
  const noteSection = document.getElementById('note-section');

  chapterSelect.innerHTML = '';
  noteSection.style.display = 'none';

  if (subject && chapters[subject]) {
    chapterSection.style.display = 'block';
    const chapterList = chapters[subject];
    for (const title in chapterList) {
      const option = document.createElement('option');
      option.value = title;
      option.textContent = title;
      chapterSelect.appendChild(option);
    }
  } else {
    chapterSection.style.display = 'none';
  }
}

function showNote() {
  const subject = document.getElementById('subject-select').value;
  const chapter = document.getElementById('chapter-select').value;
  const noteTitle = document.getElementById('note-title');
  const noteContent = document.getElementById('note-content');
  const noteSection = document.getElementById('note-section');

  if (subject && chapter && chapters[subject][chapter]) {
    noteTitle.textContent = chapter;
    noteContent.textContent = chapters[subject][chapter];
    noteSection.style.display = 'block';
  } else {
    noteSection.style.display = 'none';
  }
}