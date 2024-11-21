let lastVisibleContent = null;

function toggleContent(box, contentId) {
  const content = document.getElementById(contentId);

  if (lastVisibleContent && lastVisibleContent !== content) {
    lastVisibleContent.classList.remove('visible');
    lastVisibleContent.classList.add('hidden');
  }

  
  content.classList.remove('hidden');
  content.classList.add('visible');
  
  
  box.style.display = 'none';

  
  lastVisibleContent = content;
}

  