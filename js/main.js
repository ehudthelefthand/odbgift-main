$(document).ready(function() {
  $.backstretch([
    "img/background/IMAGE1.jpg",
    "img/background/IMAGE2.jpg",
    "img/background/IMAGE3.jpg",
    "img/background/IMAGE4.jpg",
    "img/background/IMAGE5.jpg",
    "img/background/IMAGE6.jpg",
    "img/background/IMAGE7.jpg",
    "img/background/IMAGE8.jpg",
    "img/background/IMAGE9.jpg"
  ], { duration: 8000, fade: 3000 });
});

var
  wisdomWords = [
    "江上往来人但爱鲈鱼美/君看一叶舟出没风波里",
    "荡胸生层云决眦入归鸟/会当凌绝顶一览众山小",
    "大自然的痕迹无所不在",
    "诸天述说上帝的荣耀/穹苍传扬祂的手段/这日到那日发出言语/这夜到那夜传出知识",
    "山重水复疑无路/柳暗花明又一村/当山林中雾气消散/人生总能重见希望",
    "祢使天空绚丽大地富足/天地万物都因祢而存在",
    "大山可以挪开/小山可以迁移/但有一位永恒的主宰/永不更改",
    "万丈光芒的高山沙漠中/绿洲越显珍贵/疲乏困顿的生活中/活水就是力量",
    "走在天路旅程中/越过高山经过幽谷/祂应许一路陪伴到底"
  ],
  lblWisdomWords = $("#wisdom-word"),
  btnLinks = $("#btnLinks"),
  btnAboutUs = $("#btnAboutUs"),
  btnAboutUs2 = $("#btnAboutUs2"),
  links = $("#modal-link"),
  about = $("#about"),
  aboutCompany = $("#about-company"),
  links_closed = true,
  aboutus_closed = true;
  aboutcompany_closed = true;

btnLinks.click(function(e) {
  resetAbout();
  resetAboutCompany();
  $.uriAnchor.setAnchor({
    link: links_closed ? "open" : "close"
  });
  links_closed = !links_closed;
});

btnAboutUs.click(function(e) {
  resetLink();
  resetAboutCompany();
  $.uriAnchor.setAnchor({
    aboutus: aboutus_closed ? "open" : "close"
  });
  aboutus_closed = !aboutus_closed;
});

btnAboutUs2.click(function(e) {
  resetLink();
  resetAboutCompany();
  $.uriAnchor.setAnchor({
    aboutus: aboutus_closed ? "open" : "close"
  });
  aboutus_closed = !aboutus_closed;
});

aboutCompany.click(function(e) {
  resetLink();
  resetAbout();
  $.uriAnchor.setAnchor({
    aboutcompany: aboutcompany_closed ? "open" : "close"
  });
  aboutcompany_closed = !aboutcompany_closed;
});

function resetAll() {
  resetLink();
  resetAbout();
  resetAboutCompany();
}

function resetLink() {
  links.hide();
  links_closed = true;
}

function resetAbout() {
  about.hide();
  aboutus_closed = true;
}

function resetAboutCompany() {
  aboutCompany.hide();
  aboutcompany_closed = true;
}

function onHashChange(e) {
  var new_state = $.uriAnchor.makeAnchorMap();
  if (new_state.link) {
    resetAbout();
    resetAboutCompany();
    switch (new_state.link) {
      case "open":
        links.fadeIn(500);
        break;
      case "close":
        links.fadeOut(500);
        break;
    }
  }
  else if (new_state.aboutus) {
    resetLink();
    resetAboutCompany();
    switch (new_state.aboutus) {
      case "open":
        about.fadeIn(500);
        break;
      case "close":
        about.fadeOut(500);
        break;
    }
  }
  else if (new_state.aboutcompany) {
    resetLink();
    resetAbout();
    switch (new_state.aboutcompany) {
      case "open":
        aboutCompany.fadeIn(500);
        break;
      case "close":
        aboutCompany.fadeOut(500);
        break;
    }
  }
  else {
    resetAll();
  }
}

function elt(name, className) {
  var element = document.createElement(name);
  if (className) element.className = className;
  return element;
}

function getWisdomWord(index) {
  var wrapper = elt("div");
  var words = wisdomWords[index].split("/");
  for (var i = 0; i < words.length; i++) {
    var wordElement = elt("div", "word");
    wordElement.innerText = words[i];
    wrapper.appendChild(wordElement);
  }
  return wrapper;
}

function onSlideChange(e, instance, index) {
  lblWisdomWords.html(getWisdomWord(index));
  $("#wisdom-word > div").fadeIn(1000);
}

$(window)
  .bind("hashchange", onHashChange)
  .trigger("hashchange")
  .on("backstretch.before", onSlideChange);




  
