import React, { useEffect, useRef } from "react";
import SVGA from "svgaplayerweb";

const StarsSvga = ({ src }) => {
  const playerRef = useRef(null);
  var player, parser;

  useEffect(() => {
    player = new SVGA.Player("#stars-svga");
    parser = new SVGA.Parser("#stars-svga");
    parser.load(src, function (videoItem) {
      player.setVideoItem(videoItem);
      playerRef.current.startAnimation();
    });
    playerRef.current = player;
    return () => {
      player.clear();
    };
  }, []);

  return (
    <>
      <div id="stars-svga" className="stars-svga"></div>
    </>
  );
};

export default StarsSvga;
