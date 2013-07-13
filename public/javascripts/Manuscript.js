function Manuscript() {
}

// "bbox 197 272 249 281"
// hOCR format: https://docs.google.com/document/d/1QQnIQtvdAC_8n92-LhwPcjtAUFwBlzE8EWnKAxlgVf0/preview
// bbox x0 y0 x1 y1
Manuscript.bboxToStyle = function(bbox_str) {
  arr = bbox_str.split(" ");
  left_pos = "left:"+arr[1]+"px; ";
  top_pos = "top:"+arr[2]+"px; ";
  right_pos = "right:"+arr[3]+"px; ";
  bottom_pos = "bottom:"+arr[4]+"px; ";
  return left_pos + top_pos + right_pos + bottom_pos;
};