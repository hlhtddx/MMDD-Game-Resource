<?xml version="1.0" encoding="UTF-8"?>
<tileset name="expr" tilewidth="60" tileheight="80" tilecount="9" columns="3">
 <image source="expr.png" width="180" height="240"/>
 <terraintypes>
  <terrain name="Fixed" tile="6"/>
  <terrain name="TBD" tile="7"/>
  <terrain name="Highlight" tile="8"/>
 </terraintypes>
 <tile id="0" terrain="0,0,,"/>
 <tile id="1" terrain="1,1,,"/>
 <tile id="2">
  <animation>
   <frame tileid="2" duration="300"/>
   <frame tileid="0" duration="300"/>
  </animation>
 </tile>
 <tile id="3" terrain=",,0,0"/>
 <tile id="4" terrain=",,1,1"/>
 <tile id="5" terrain=",,2,2">
  <animation>
   <frame tileid="5" duration="300"/>
   <frame tileid="3" duration="300"/>
  </animation>
 </tile>
 <tile id="6" terrain="0,0,0,0"/>
 <tile id="8" terrain="2,2,2,2">
  <animation>
   <frame tileid="8" duration="300"/>
   <frame tileid="6" duration="300"/>
  </animation>
 </tile>
</tileset>
