var fontRegular, fontItalic, fontBold;
function preload() {
   fontRegular = loadFont("assets/Regular.otf");
   fontItalic = loadFont("assets/Italic.ttf");
   fontBold = loadFont("assets/Bold.ttf");
}
function setup() {
   background(210);
   fill(0).strokeWeight(0).textSize(10);
   textFont(fontRegular);
   text("Font Style Normal", 10, 30);
   textFont(fontItalic);
   text("Font Style Italic", 10, 50);
   textFont(fontBold);
   text("Font Style Bold", 10, 70);
}