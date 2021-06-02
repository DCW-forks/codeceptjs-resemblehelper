
async _resizeElementCoordinatesForScreenshotElement(selector, options){


    const boundingBox = await this._getBoundingBox(selector);
    console.log(boundingBox, " ...boundingBox pre selector: ", selector);
    
    options.ignoredBoxes = options.ignoredBoxes.map((elementCoordinates) => {
      console.log(elementCoordinates, " ELEMENT COORDINATES");
      const ignoredLeft = elementCoordinates.left - boundingBox.left;
      const ignoredTop = elementCoordinates.top - boundingBox.top;
      const ignoredRight = elementCoordinates.right - boundingBox.left;
      const ignoredBottom = elementCoordinates.bottom - boundingBox.top;
    
      return {
        left: ignoredLeft,
        top: ignoredTop,
        right: ignoredRight,
        bottom: ignoredBottom,
      };
    });
    
    console.log(options.ignoredBoxes, "yyyyyyyyyyyyyyyyyyy");
    console.log(options.boundingBox, "yyyyyyyyyyyyyyyyyyy");
    



}

