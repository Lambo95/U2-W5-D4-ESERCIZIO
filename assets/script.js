let textSelected;

function selectText(event) {
  textSelected = event.target;
  textSelected.classList.toggle("selected");
  console.log(textSelected);
}

function textBold() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("bold")) {
      textSelected.classList.add("bold");
      console.log(textSelected);
    } else if (textSelected.classList.contains("bold")) {
      textSelected.classList.remove("bold");
      console.log(textSelected);
    }
  }
}

function textEm() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("em")) {
      textSelected.classList.add("em");
      console.log(textSelected);
    } else if (textSelected.classList.contains("em")) {
      textSelected.classList.remove("em");
      console.log(textSelected);
    }
  }
}

function textUn() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("un")) {
      textSelected.classList.add("un");
      console.log(textSelected);
    } else if (textSelected.classList.contains("un")) {
      textSelected.classList.remove("un");
      console.log(textSelected);
    }
  }
}

function textUpper() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("upper")) {
      textSelected.classList.add("upper");
      console.log(textSelected);
    } else if (textSelected.classList.contains("upper")) {
      textSelected.classList.remove("upper");
      console.log(textSelected);
    }
  }
}

function textLeft() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("align-left")) {
      textSelected.classList.add("align-left");
      console.log(textSelected);
    } else if (textSelected.classList.contains("align-left")) {
      textSelected.classList.remove("align-left");
      console.log(textSelected);
    }
  }
}

function textRight() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("align-right")) {
      textSelected.classList.add("align-right");
      console.log(textSelected);
    } else if (textSelected.classList.contains("align-right")) {
      textSelected.classList.remove("align-right");
      console.log(textSelected);
    }
  }
}

function textCenter() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("center")) {
      textSelected.classList.add("center");
      console.log(textSelected);
    } else if (textSelected.classList.contains("center")) {
      textSelected.classList.remove("center");
      console.log(textSelected);
    }
  }
}

function textJustify() {
  if (textSelected.classList.contains("selected")) {
    if (!textSelected.classList.contains("justify")) {
      textSelected.classList.add("justify");
      console.log(textSelected);
    } else if (textSelected.classList.contains("justify")) {
      textSelected.classList.remove("justify");
      console.log(textSelected);
    }
  }
}
