import React, { useEffect, useState } from "react";

const Map = ({url}) => {
  const [embedCode, setEmbedCode] = useState("");

  const convertUrlToEmbedCode = (url) => {
    const isShortUrl = url.includes("goo.gl/maps");
    const embedBaseUrl = "https://www.google.com/maps/embed/v1/place";
    const apiKey = 'AIzaSyBgdFbWHhLih7uRaHkGThmswqGwR_9llb0';

    if (isShortUrl) {
      const embedUrl = `${embedBaseUrl}?key=${apiKey}&q=${encodeURIComponent(url)}`;
      
      const iframeCode = `<iframe src="${embedUrl}" width="480" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
      
      return iframeCode;
      
    } else {
      // Extracting latitude, longitude, and zoom level from the short URL
      const regex = /@([\d.-]+),([\d.-]+),(\d+)z/;
      const match = url.match(regex);
  
      if (match && match.length === 4) {
        const latitude = parseFloat(match[1]);
        const longitude = parseFloat(match[2]);
        const zoomLevel = parseInt(match[3]);
        
        const embedUrl = `${embedBaseUrl}?key=${apiKey}&q=${latitude},${longitude}&zoom=${zoomLevel}`;
        
        const iframeCode = `<iframe src="${embedUrl}" width="480" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
        
        return iframeCode;
      }
    }
  
    return null; // Return null if extraction fails or URL type is unsupported
  };

  useEffect(() => {
    const newEmbedCode = convertUrlToEmbedCode(url);
    setEmbedCode(newEmbedCode);
  }, [url]);

  return (
    <div>
       <div dangerouslySetInnerHTML={{ __html: embedCode }} />    
    </div>
  );
};

export default Map;


// AIzaSyBgdFbWHhLih7uRaHkGThmswqGwR_9llb0