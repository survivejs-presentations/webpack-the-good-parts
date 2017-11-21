// Process foo.png through url-loader and other matches
import "url-loader!./foo.png";

// Override possible higher level match completely
import "!!url-loader!./bar.png";
