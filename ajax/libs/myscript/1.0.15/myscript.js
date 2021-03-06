/*
 myscript - The JavaScript library for the MyScript Cloud recognition service
 Version: 1.0.15
 License: Apache-2.0
 */
/**
 * MyScript javascript library
 *
 * @module MyScript
 * @requires Q
 * @requires CryptoJS
 */
/*global MyScript:true */
MyScript = {};
'use strict';

(function (scope) {
    /**
     * Point
     *
     * @class Point
     * @param {Object} [obj]
     * @constructor
     */
    function Point(obj) {
        if (obj) {
            this.x = obj.x;
            this.y = obj.y;
        }
    }

    /**
     * Get x
     *
     * @method getX
     * @returns {Number}
     */
    Point.prototype.getX = function () {
        return this.x;
    };

    /**
     * Set x
     *
     * @method setX
     * @param {Number} x
     */
    Point.prototype.setX = function (x) {
        this.x = x;
    };

    /**
     * Get y
     *
     * @method getY
     * @returns {Number}
     */
    Point.prototype.getY = function () {
        return this.y;
    };

    /**
     * Set y
     *
     * @method setY
     * @param {Number} y
     */
    Point.prototype.setY = function (y) {
        this.y = y;
    };

    // Export
    scope.Point = Point;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Complex Point object used for quadratic calculation
     *
     * @class QuadraticPoint
     * @extends Point
     * @param {Object} [obj]
     * @constructor
     */
    function QuadraticPoint(obj) {
        scope.Point.call(this, obj);
        this.pressure = 0.5;
        this.distance = 0.0;
        this.length = 0.0;
        this.cos = 0.0;
        this.sin = 0.0;
        this.p1 = new scope.Point(obj);
        this.p2 = new scope.Point(obj);
        if (obj) {
            this.pressure = obj.pressure;
            this.distance = obj.distance;
            this.length = obj.length;
            this.cos = obj.cos;
            this.sin = obj.sin;
            this.p1 = new scope.Point(obj.p1);
            this.p2 = new scope.Point(obj.p2);
        }
    }

    /**
     * Inheritance property
     */
    QuadraticPoint.prototype = new scope.Point();

    /**
     * Constructor property
     */
    QuadraticPoint.prototype.constructor = QuadraticPoint;

    /**
     * Get pressure
     *
     * @method getPressure
     * @returns {Number}
     */
    QuadraticPoint.prototype.getPressure = function () {
        return this.pressure;
    };

    /**
     * Set pressure
     *
     * @method setPressure
     * @param {Number} pressure
     */
    QuadraticPoint.prototype.setPressure = function (pressure) {
        this.pressure = pressure;
    };

    /**
     * Get distance
     *
     * @method getDistance
     * @returns {Number}
     */
    QuadraticPoint.prototype.getDistance = function () {
        return this.distance;
    };

    /**
     * Set distance
     *
     * @method setDistance
     * @param {Number} distance
     */
    QuadraticPoint.prototype.setDistance = function (distance) {
        this.distance = distance;
    };

    /**
     * Get length
     *
     * @method getLength
     * @returns {Number}
     */
    QuadraticPoint.prototype.getLength = function () {
        return this.length;
    };

    /**
     * Set length
     *
     * @method setLength
     * @param {Number} length
     */
    QuadraticPoint.prototype.setLength = function (length) {
        this.length = length;
    };

    /**
     * Get cos
     *
     * @method getCos
     * @returns {Number}
     */
    QuadraticPoint.prototype.getCos = function () {
        return this.cos;
    };

    /**
     * Set cos
     *
     * @method setCos
     * @param {Number} cos
     */
    QuadraticPoint.prototype.setCos = function (cos) {
        this.cos = cos;
    };

    /**
     * Get sin
     *
     * @method getSin
     * @returns {Number}
     */
    QuadraticPoint.prototype.getSin = function () {
        return this.sin;
    };

    /**
     * Set sin
     *
     * @method setSin
     * @param {Number} sin
     */
    QuadraticPoint.prototype.setSin = function (sin) {
        this.sin = sin;
    };

    /**
     * Get p1
     *
     * @method getP1
     * @returns {Point}
     */
    QuadraticPoint.prototype.getP1 = function () {
        return this.p1;
    };

    /**
     * Set p1
     *
     * @method setP1
     * @param {Point} p1
     */
    QuadraticPoint.prototype.setP1 = function (p1) {
        this.p1 = p1;
    };

    /**
     * Get p2
     *
     * @method getP2
     * @returns {Point}
     */
    QuadraticPoint.prototype.getP2 = function () {
        return this.p2;
    };

    /**
     * Set p2
     *
     * @method setP2
     * @param {Point} p2
     */
    QuadraticPoint.prototype.setP2 = function (p2) {
        this.p2 = p2;
    };

    // Export
    scope.QuadraticPoint = QuadraticPoint;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Rectangle
     *
     * @class Rectangle
     * @param {Object} [obj]
     * @constructor
     */
    function Rectangle(obj) {
        if (obj) {
            this.x = obj.x;
            this.y = obj.y;
            this.width = obj.width;
            this.height = obj.height;
        }
    }

    /**
     * Get top-left x
     *
     * @method getX
     * @returns {Number}
     */
    Rectangle.prototype.getX = function () {
        return this.x;
    };

    /**
     * Set top-left x
     *
     * @method setX
     * @param {Number} x
     */
    Rectangle.prototype.setX = function (x) {
        this.x = x;
    };

    /**
     * Get top-left y
     *
     * @method getY
     * @returns {Number}
     */
    Rectangle.prototype.getY = function () {
        return this.y;
    };

    /**
     * Set top-left y
     *
     * @method setY
     * @param {Number} y
     */
    Rectangle.prototype.setY = function (y) {
        this.y = y;
    };

    /**
     * Get top-left point
     *
     * @method getTopLeftPoint
     * @returns {Point}
     */
    Rectangle.prototype.getTopLeftPoint = function () {
        var point = new scope.Point();
        point.setX(this.x);
        point.setY(this.y);
        return point;
    };

    /**
     * Set top-left point
     *
     * @method setTopLeftPoint
     * @param {Point} topLeftPoint
     */
    Rectangle.prototype.setTopLeftPoint = function (topLeftPoint) {
        this.x = topLeftPoint.getX();
        this.y = topLeftPoint.getY();
    };

    /**
     * Get width
     *
     * @method getWidth
     * @returns {Number}
     */
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };

    /**
     * Set width
     *
     * @method setWidth
     * @param {Number} width
     */
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };

    /**
     * Get height
     *
     * @method getHeight
     * @returns {Number}
     */
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };

    /**
     * Set height
     *
     * @method setHeight
     * @returns {Number} height
     */
    Rectangle.prototype.setHeight = function (height) {
        this.height = height;
    };

    // Export
    scope.Rectangle = Rectangle;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * The InkManager class that can use to store writing strokes and manage the undo/redo/clear system
     *
     * @class InkManager
     * @constructor
     */
    function InkManager() {
        this.writing = false;
        this.strokes = [];
        this.currentStroke = null;
        this.undoRedoStack = [];
    }

    /**
     * Is Wrinting a stoke
     *
     * @method isWriting
     * @returns {Boolean}
     */
    InkManager.prototype.isWriting = function () {
        return this.writing;
    };

    /**
     * Get the last current Stroke write
     *
     * @method getCurrentStroke
     * @returns {Stroke}
     */
    InkManager.prototype.getCurrentStroke = function () {
        return this.currentStroke;
    };

    /**
     * Start ink capture
     *
     * @method startInkCapture
     * @param {Number} x abscissa coordinate
     * @param {Number} y ordinate coordinate
     * @param {Number} [t] event timestamp
     */
    InkManager.prototype.startInkCapture = function (x, y, t) {
        if (!this.writing) {
            if (!this.isRedoEmpty()) {
                this.clearUndoRedoStack();
            }
            this.currentStroke = new scope.Stroke();
            this.currentStroke.addX(x);
            this.currentStroke.addY(y);
            this.currentStroke.addT(t);
            this.writing = true;
        } else {
            throw new Error('Stroke capture already running');
        }
    };

    /**
     * Continue ink capture
     *
     * @method continueInkCapture
     * @param {Number} x abscissa coordinate
     * @param {Number} y ordinate coordinate
     * @param {Number} [t] event timestamp
     */
    InkManager.prototype.continueInkCapture = function (x, y, t) {
        if (this.writing) {
            this.currentStroke.addX(x);
            this.currentStroke.addY(y);
            this.currentStroke.addT(t);
        } else {
            throw new Error('Missing startInkCapture');
        }
    };

    /**
     * End ink capture
     *
     * @method endInkCapture
     */
    InkManager.prototype.endInkCapture = function () {
        if (this.writing) {
            this.strokes.push(this.currentStroke);
            this.writing = false;
        } else {
            throw new Error('Missing startInkCapture');
        }
    };

    /**
     * Clear the strokes list
     *
     * @method clear
     */
    InkManager.prototype.clear = function () {
        this.writing = false;
        this.strokes = [];
        this.currentStroke = null;
        this.undoRedoStack = [];
    };

    /**
     * Is The Strokes list is empty
     *
     * @method isEmpty
     * @returns {Boolean}
     */
    InkManager.prototype.isEmpty = function () {
        return this.strokes.length === 0;
    };

    /**
     * Is the Undo/Redo Stack empty
     *
     * @method isRedoEmpty
     * @returns {Boolean}
     */
    InkManager.prototype.isRedoEmpty = function () {
        return this.undoRedoStack.length === 0;
    };

    /**
     * Make an undo
     *
     * @method undo
     */
    InkManager.prototype.undo = function () {
        if (!this.isEmpty()) {
            this.undoRedoStack.push(this.strokes[this.strokes.length - 1]);
            this.strokes.pop();
        }
    };

    /**
     * Make a redo
     *
     * @method redo
     */
    InkManager.prototype.redo = function () {
        if (!this.isRedoEmpty()) {
            this.strokes.push(this.undoRedoStack[this.undoRedoStack.length - 1]);
            this.undoRedoStack.pop();
        }
    };

    /**
     * Get the strokes list
     *
     * @method getStokes
     * @returns {Stroke[]}
     */
    InkManager.prototype.getStrokes = function () {
        return this.strokes;
    };

    /**
     * Get the Undo/Redo Stack
     *
     * @method getUndoRedoStack
     * @returns {Stroke[]}
     */
    InkManager.prototype.getUndoRedoStack = function () {
        return this.undoRedoStack;
    };

    /**
     * Clear the Undo/Redo Stack
     *
     * @method clearUndoRedoStack
     */
    InkManager.prototype.clearUndoRedoStack = function () {
        this.undoRedoStack = [];
    };

    /**
     * Copy the strokes values from index on an other list of strokes
     *
     * @method copy
     * @param {Stroke[]} strokes List of strokes
     * @param {Number} index Position to start the copy
     */
    InkManager.prototype.copy = function (strokes, index) {
        for (index; index < this.strokes.length; index++) {
            strokes.push(this.strokes[index]);
        }
    };

    // Export
    scope.InkManager = InkManager;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * The mathUtil class is use to calculate lines
     *
     * @class MathUtil
     * @constructor
     */
    function MathUtils() {
    }

    /**
     * This method is use to calculate the size of the rectangle that contains an ellipse arc.
     *
     * @method getEllipseArcRect
     * @param {Point} center
     * @param {Number} maxRadius
     * @param {Number} minRadius
     * @param {Number} orientation
     * @param {Number} startAngle
     * @param {Number} sweepAngle
     * @returns {Rectangle}
     */
    MathUtils.getEllipseArcRect = function (center, maxRadius, minRadius, orientation, startAngle, sweepAngle) {

        var angleStep = 0.02, // angle delta between interpolated points on the arc, in radian
            angle, // angle
            alpha, // angle
            z1,
            z2,
            z3,
            z4,
            cosAlpha,
            sinAlpha,
            n,
            xList,
            yList,
            i,
            x,
            y,
            xMin,
            xMax,
            yMin,
            yMax,
            sortFloat = function (a, b) {
                return a - b;
            };

        z1 = z2 = Math.cos(orientation);
        z3 = z4 = Math.sin(orientation);
        z1 *= maxRadius;
        z2 *= minRadius;
        z3 *= maxRadius;
        z4 *= minRadius;

        n = Math.abs(sweepAngle) / angleStep;

        xList = [];
        yList = [];

        for (i = 0; i <= n; i++) {

            angle = startAngle + (i / n) * sweepAngle;
            alpha = Math.atan2(Math.sin(angle) / minRadius, Math.cos(angle) / maxRadius);

            cosAlpha = Math.cos(alpha);
            sinAlpha = Math.sin(alpha);

            // current point
            x = center.x + z1 * cosAlpha - z4 * sinAlpha;
            y = center.y + z2 * sinAlpha + z3 * cosAlpha;

            xList.push(x);
            yList.push(y);
        }

        xList.sort(sortFloat);
        yList.sort(sortFloat);

        xMin = xList[0];
        xMax = xList[xList.length - 1];
        yMin = yList[0];
        yMax = yList[yList.length - 1];

        return new scope.Rectangle({x: xMin, y: yMin, width: xMax - xMin, height: yMax - yMin});
    };

    /**
     * This method is use to calculate the size of the rectangle that contains a line.
     *
     * @method getLineRect
     * @param {Point} firstPoint
     * @param {Point} lastPoint
     * @returns {Rectangle}
     */
    MathUtils.getLineRect = function (firstPoint, lastPoint) {

        var xFirst = firstPoint.x,
            xLast = lastPoint.x,
            xMin = Math.min(xFirst, xLast),
            xMax = Math.max(xFirst, xLast),

            yFirst = firstPoint.y,
            yLast = lastPoint.y,
            yMin = Math.min(yFirst, yLast),
            yMax = Math.max(yFirst, yLast);

        return new scope.Rectangle({x: xMin, y: yMin, width: xMax - xMin, height: yMax - yMin});
    };

    /**
     * This method is use to calculate the size of the rectangle that contains bounding boxes.
     *
     * @method getBoundingRect
     * @param {Rectangle[]} boundingBoxes List of bounding box
     * @returns {Rectangle}
     */
    MathUtils.getBoundingRect = function (boundingBoxes) {

        var xList = [],
            yList = [];

        for (var i in boundingBoxes) {
            var rectangle = boundingBoxes[i];
            xList.push(rectangle.getX());
            xList.push(rectangle.getX() + rectangle.getWidth());
            yList.push(rectangle.getY());
            yList.push(rectangle.getY() + rectangle.getHeight());
        }

        var xMin = Math.min.apply(Math, xList);
        var xMax = Math.max.apply(Math, xList);
        var yMin = Math.min.apply(Math, yList);
        var yMax = Math.max.apply(Math, yList);

        return new scope.Rectangle({x: xMin, y: yMin, width: xMax - xMin, height: yMax - yMin});
    };

    /**
     * This method is use to calculate the slope.
     *
     * @method getComputedSlope
     * @param {Point} pA Point A
     * @param {Point} pB Point B
     * @returns {Number}
     */
    MathUtils.getComputedSlope = function (pA, pB) {
        return (pB.getY() - pA.getY()) / (pB.getX() - pA.getX());
    };

    /**
     * This method is use to calculate the sheath points.
     *
     * @method getSheathPoints
     * @param {Point} originPoint Origin point
     * @param {Number} slope Slope
     * @param {Number} delta Delta
     * @returns {Object}
     */
    MathUtils.getSheathPoints = function (originPoint, slope, delta) {
        var x = Math.sqrt(Math.pow(delta, 2) / (1 + 1 / (Math.pow(slope, 2))));
        var y = -(1/slope) * x;
        return {
            p1: new scope.Point({x: x + originPoint.getX(), y: y + originPoint.getY()}),
            p2: new scope.Point({x: -x + originPoint.getX(), y: -y + originPoint.getY()})
        };
    };

    // Export
    scope.MathUtils = MathUtils;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract WebSocket recognition message
     *
     * @class AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function AbstractWSMessage(obj) {
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Get the message type
     *
     * @method getType
     * @returns {String}
     */
    AbstractWSMessage.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.AbstractWSMessage = AbstractWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represent an abstract input component
     *
     * @class AbstractComponent
     * @constructor
     */
    function AbstractComponent() {
    }

    /**
     * Get the type of the input component
     *
     * @method getType
     * @returns {String}
     */
    AbstractComponent.prototype.getType = function () {
        return this.type;
    };

    /**
     * Set the type of the input component
     *
     * @method setType
     * @param {String} type
     */
    AbstractComponent.prototype.setType = function (type) {
        this.type = type;
    };

    // Export
    scope.AbstractComponent = AbstractComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represent a simple stroke input component
     *
     * @class Stroke
     * @extends AbstractComponent
     * @constructor
     */
    function Stroke(obj) {
        this.type = 'stroke';
        this.x = [];
        this.y = [];
        this.t = [];
        if (obj) {
            this.x = obj.x;
            this.y = obj.y;
            this.t = obj.t;
        }
    }

    /**
     * Inheritance property
     */
    Stroke.prototype = new scope.AbstractComponent();

    /**
     * Constructor property
     */
    Stroke.prototype.constructor = Stroke;

    /**
     * Get the list of x coordinates
     *
     * @method getX
     * @returns {Number[]}
     */
    Stroke.prototype.getX = function () {
        return this.x;
    };

    /**
     * Set the list of x coordinates
     *
     * @method setX
     * @param {Number[]} x
     */
    Stroke.prototype.setX = function (x) {
        this.x = x;
    };

    /**
     * Add a x to the list of x coordinates
     *
     * @method addX
     * @param {Number} x
     */
    Stroke.prototype.addX = function (x) {
        if ((x !== null) && (x !== undefined)) {
            this.x.push(x);
        }
    };

    /**
     * Get the list of y coordinates
     *
     * @method getY
     * @returns {Number[]}
     */
    Stroke.prototype.getY = function () {
        return this.y;
    };

    /**
     * Set the list of y coordinates
     *
     * @method setY
     * @param {Number[]} y
     */
    Stroke.prototype.setY = function (y) {
        this.y = y;
    };

    /**
     * Add a y to the list of y coordinates
     *
     * @method addY
     * @param {Number} y
     */
    Stroke.prototype.addY = function (y) {
        if ((y !== null) && (y !== undefined)) {
            this.y.push(y);
        }
    };

    /**
     * Get the list of timestamps
     *
     * @method getT
     * @returns {Number[]}
     */
    Stroke.prototype.getT = function () {
        return this.t;
    };

    /**
     * Set the list of timestamps
     *
     * @method setT
     * @param {Number[]} t
     */
    Stroke.prototype.setT = function (t) {
        this.t = t;
    };

    /**
     * Add a timestamp to the list
     *
     * @method addT
     * @param {Number} t
     */
    Stroke.prototype.addT = function (t) {
        if ((t !== null) && (t !== undefined)) {
            this.t.push(t);
        }
    };

    /**
     * Get the number of points for this stroke
     *
     * @method getLength
     * @returns {Number}
     */
    Stroke.prototype.getLength = function () {
        return this.x.length;
    };


    /**
     * Get the boundingBox
     *
     * @method getBoundingBox
     * @returns {Rectangle}
     */
    Stroke.prototype.getBoundingBox = function () {
        var boundingBox = new scope.Rectangle();
        boundingBox.setX(Math.min.apply(Math, this.getX()));
        boundingBox.setY(Math.min.apply(Math, this.getY()));
        boundingBox.setWidth(Math.max.apply(Math, this.getX()) - boundingBox.getX());
        boundingBox.setHeight(Math.max.apply(Math, this.getY()) - boundingBox.getY());
        return boundingBox;
    };

    // Export
    scope.Stroke = Stroke;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Char input component
     *
     * @class CharacterInputComponent
     * @extends AbstractComponent
     * @constructor
     */
    function CharacterInputComponent() {
        this.type = 'inputCharacter';
        this.alternates = [];
    }

    /**
     * Inheritance property
     */
    CharacterInputComponent.prototype = new scope.AbstractComponent();

    /**
     * Constructor property
     */
    CharacterInputComponent.prototype.constructor = CharacterInputComponent;

    /**
     * Get character input alternates
     *
     * @method getAlternates
     * @returns {CharacterInputComponentAlternate[]}
     */
    CharacterInputComponent.prototype.getAlternates = function () {
        return this.alternates;
    };

    /**
     * Set character input alternates
     *
     * @method setAlternates
     * @param {CharacterInputComponentAlternate[]} alternates
     */
    CharacterInputComponent.prototype.setAlternates = function (alternates) {
        this.alternates = alternates;
    };

    /**
     * Add a character input alternate
     *
     * @method addAlternate
     * @param {CharacterInputComponent} alternate
     */
    CharacterInputComponent.prototype.addAlternate = function (alternate) {
        this.alternates.push(alternate);
    };

    /**
     * Get input component bounding-box
     *
     * @method getBoundingBox
     * @returns {Rectangle}
     */
    CharacterInputComponent.prototype.getBoundingBox = function () {
        return this.boundingBox;
    };

    /**
     * Set input component bounding-box
     *
     * @method setBoundingBox
     * @param {Rectangle} boundingBox
     */
    CharacterInputComponent.prototype.setBoundingBox = function (boundingBox) {
        this.boundingBox = boundingBox;
    };

    // Export
    scope.CharacterInputComponent = CharacterInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Character input component alternate
     *
     * @class CharacterInputComponentAlternate
     * @constructor
     */
    function CharacterInputComponentAlternate(alternate, probability) {
        this.alternate = alternate;
        this.probability = probability;
    }

    /**
     * Get alternate
     *
     * @method getAlternate
     * @returns {String}
     */
    CharacterInputComponentAlternate.prototype.getAlternate = function () {
        return this.alternate;
    };

    /**
     * Set alternate
     *
     * @method setAlternate
     * @param {String} alternate
     */
    CharacterInputComponentAlternate.prototype.setAlternate = function (alternate) {
        this.alternate = alternate;
    };

    /**
     * Get probability
     *
     * @method getProbability
     * @returns {Number}
     */
    CharacterInputComponentAlternate.prototype.getProbability = function () {
        return this.probability;
    };

    /**
     * Set probability
     *
     * @method setProbability
     * @param {Number} probability
     */
    CharacterInputComponentAlternate.prototype.setProbability = function (probability) {
        this.probability = probability;
    };

    // Export
    scope.CharacterInputComponentAlternate = CharacterInputComponentAlternate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract parameters used for recognition
     *
     * @class AbstractParameter
     * @constructor
     */
    function AbstractParameter() {
    }

    // Export
    scope.AbstractParameter = AbstractParameter;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstraction of recognizer input
     *
     * @class AbstractRecognitionInput
     * @constructor
     */
    function AbstractRecognitionInput() {
    }

    // Export
    scope.AbstractRecognitionInput = AbstractRecognitionInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract input recognition data
     *
     * @class AbstractRecognitionData
     * @constructor
     */
    function AbstractRecognitionData() {
    }

    /**
     * Get the application key
     *
     * @method getApplicationKey
     * @returns {String}
     */
    AbstractRecognitionData.prototype.getApplicationKey = function () {
        return this.applicationKey;
    };

    /**
     * Set the application key
     *
     * @method setApplicationKey
     * @param {String} applicationKey
     */
    AbstractRecognitionData.prototype.setApplicationKey = function (applicationKey) {
        this.applicationKey = applicationKey;
    };

    /**
     * Get the instanceId
     *
     * @method getInstanceId
     * @returns {String}
     */
    AbstractRecognitionData.prototype.getInstanceId = function () {
        return this.instanceId;
    };

    /**
     * Set the instanceId
     *
     * @method setInstanceId
     * @param {String} instanceId
     */
    AbstractRecognitionData.prototype.setInstanceId = function (instanceId) {
        this.instanceId = instanceId;
    };

    /**
     * @returns {string}
     */
    AbstractRecognitionData.prototype.getHmac = function () {
        return this.hmac;
    };

    /**
     * @param {string} hmac
     */
    AbstractRecognitionData.prototype.setHmac = function (hmac) {
        this.hmac = hmac;
    };

    // Export
    scope.AbstractRecognitionData = AbstractRecognitionData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * List of languages recognition input
     *
     * @class RecognitionLanguagesData
     * @extends AbstractRecognitionData
     * @constructor
     */
    function RecognitionLanguagesData() {
    }

    /**
     * Inheritance property
     */
    RecognitionLanguagesData.prototype = new scope.AbstractRecognitionData();

    /**
     * Constructor property
     */
    RecognitionLanguagesData.prototype.constructor = RecognitionLanguagesData;

    /**
     * Get the recognition input mode
     *
     * @method getInputMode
     * @returns {String} inputMode
     */
    RecognitionLanguagesData.prototype.getInputMode = function () {
        return this.inputMode;
    };

    /**
     * Set the recognition input mode
     *
     * @method setInputMode
     * @param {String} inputMode
     */
    RecognitionLanguagesData.prototype.setInputMode = function (inputMode) {
        this.inputMode = inputMode;
    };

    // Export
    scope.RecognitionLanguagesData = RecognitionLanguagesData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket start math recognition message
     *
     * @class AbstractStartRequestWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function AbstractStartRequestWSMessage(obj) {
        this.type = 'start';
        scope.AbstractWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    AbstractStartRequestWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    AbstractStartRequestWSMessage.prototype.constructor = AbstractStartRequestWSMessage;

    // Export
    scope.AbstractStartRequestWSMessage = AbstractStartRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket continue math recognition message
     *
     * @class AbstractContinueRequestWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function AbstractContinueRequestWSMessage(obj) {
        this.type = 'continue';
        scope.AbstractWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    AbstractContinueRequestWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    AbstractContinueRequestWSMessage.prototype.constructor = AbstractContinueRequestWSMessage;

    /**
     * Get instanceId
     *
     * @method getInstanceId
     * @returns {String}
     */
    AbstractContinueRequestWSMessage.prototype.getInstanceId = function () {
        return this.instanceId;
    };

    /**
     * Set instanceId
     *
     * @method setInstanceId
     * @param {String} instanceId
     */
    AbstractContinueRequestWSMessage.prototype.setInstanceId = function (instanceId) {
        this.instanceId = instanceId;
    };

    // Export
    scope.AbstractContinueRequestWSMessage = AbstractContinueRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition hmac challenge message
     *
     * @class ChallengeRequestWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function ChallengeRequestWSMessage(obj) {
        this.type = 'hmac';
        scope.AbstractWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    ChallengeRequestWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    ChallengeRequestWSMessage.prototype.constructor = ChallengeRequestWSMessage;

    /**
     * Get the challenge
     *
     * @method getChallenge
     * @returns {String}
     */
    ChallengeRequestWSMessage.prototype.getChallenge = function () {
        return this.challenge;
    };

    /**
     * Set the challenge
     *
     * @method setChallenge
     * @param {String} challenge
     */
    ChallengeRequestWSMessage.prototype.setChallenge = function (challenge) {
        this.challenge = challenge;
    };

    /**
     * Get the application key
     *
     * @method getApplicationKey
     * @returns {String}
     */
    ChallengeRequestWSMessage.prototype.getApplicationKey = function () {
        return this.applicationKey;
    };

    /**
     * Set the application key
     *
     * @method setApplicationKey
     * @param {String} applicationKey
     */
    ChallengeRequestWSMessage.prototype.setApplicationKey = function (applicationKey) {
        this.applicationKey = applicationKey;
    };

    /**
     * Get HMAC signature
     *
     * @method getHmacSignature
     * @returns {String}
     */
    ChallengeRequestWSMessage.prototype.getHmacSignature = function () {
        return this.hmac;
    };

    /**
     * Set HMAC signature
     *
     * @method setHmacSignature
     * @param {String} hmac
     */
    ChallengeRequestWSMessage.prototype.setHmacSignature = function (hmac) {
        this.hmac = hmac;
    };

    // Export
    scope.ChallengeRequestWSMessage = ChallengeRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition hmac challenge message
     *
     * @class InitRequestWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function InitRequestWSMessage(obj) {
        this.type = 'applicationKey';
        scope.AbstractWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    InitRequestWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    InitRequestWSMessage.prototype.constructor = InitRequestWSMessage;

    /**
     * Get the application key
     *
     * @method getApplicationKey
     * @returns {String}
     */
    InitRequestWSMessage.prototype.getApplicationKey = function () {
        return this.applicationKey;
    };

    /**
     * Set the application key
     *
     * @method setApplicationKey
     * @param {String} applicationKey
     */
    InitRequestWSMessage.prototype.setApplicationKey = function (applicationKey) {
        this.applicationKey = applicationKey;
    };

    // Export
    scope.InitRequestWSMessage = InitRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition hmac challenge message
     *
     * @class ResetRequestWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function ResetRequestWSMessage(obj) {
        this.type = 'reset';
        scope.AbstractWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    ResetRequestWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    ResetRequestWSMessage.prototype.constructor = ResetRequestWSMessage;

    // Export
    scope.ResetRequestWSMessage = ResetRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract text input component
     *
     * @class AbstractTextInputComponent
     * @extends AbstractComponent
     * @constructor
     */
    function AbstractTextInputComponent() {
    }

    /**
     * Inheritance property
     */
    AbstractTextInputComponent.prototype = new scope.AbstractComponent();

    /**
     * Constructor property
     */
    AbstractTextInputComponent.prototype.constructor = AbstractTextInputComponent;

    /**
     * Get input component bounding-box
     *
     * @method getBoundingBox
     * @returns {Rectangle}
     */
    AbstractTextInputComponent.prototype.getBoundingBox = function () {
        return this.boundingBox;
    };

    /**
     * Set input component bounding-box
     *
     * @method setBoundingBox
     * @param {Rectangle} boundingBox
     */
    AbstractTextInputComponent.prototype.setBoundingBox = function (boundingBox) {
        this.boundingBox = boundingBox;
    };

    // Export
    scope.AbstractTextInputComponent = AbstractTextInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Char input component
     *
     * @class CharInputComponent
     * @extends AbstractTextInputComponent
     * @constructor
     */
    function CharInputComponent() {
        this.type = 'char';
    }

    /**
     * Inheritance property
     */
    CharInputComponent.prototype = new scope.AbstractTextInputComponent();

    /**
     * Constructor property
     */
    CharInputComponent.prototype.constructor = CharInputComponent;

    /**
     * Get character
     *
     * @method getCharacter
     * @returns {String}
     */
    CharInputComponent.prototype.getCharacter = function () {
        return this.character;
    };

    /**
     * Set character
     *
     * @method setCharacter
     * @param {String} character
     */
    CharInputComponent.prototype.setCharacter = function (character) {
        this.character = character;
    };

    // Export
    scope.CharInputComponent = CharInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * String input component
     *
     * @class StringInputComponent
     * @extends AbstractTextInputComponent
     * @constructor
     */
    function StringInputComponent() {
        this.type = 'string';
    }

    /**
     * Inheritance property
     */
    StringInputComponent.prototype = new scope.AbstractTextInputComponent();

    /**
     * Constructor property
     */
    StringInputComponent.prototype.constructor = StringInputComponent;

    /**
     * Get string
     *
     * @method getString
     * @returns {String}
     */
    StringInputComponent.prototype.getString = function () {
        return this.string;
    };

    /**
     * Set string
     *
     * @method setString
     * @param {String} string
     */
    StringInputComponent.prototype.setString = function (string) {
        this.string = string;
    };

    // Export
    scope.StringInputComponent = StringInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Input unit used for text recognition
     *
     * @class TextInputUnit
     * @constructor
     */
    function TextInputUnit() {
        this.textInputType = 'MULTI_LINE_TEXT';
        this.components = [];
    }

    /**
     * Get the input type
     *
     * @method getInputType
     * @returns {String}
     */
    TextInputUnit.prototype.getInputType = function () {
        return this.textInputType;
    };

    /**
     * Set the input type
     *
     * @method setInputType
     * @returns {String} inputType
     */
    TextInputUnit.prototype.setInputType = function (inputType) {
        this.textInputType = inputType;
    };

    /**
     * Get components for this input unit
     *
     * @method getComponents
     * @param {TextInkRange} [inkRange]
     * @returns {AbstractComponent[]}
     */
    TextInputUnit.prototype.getComponents = function (inkRange) {
        if (inkRange && (inkRange instanceof scope.TextInkRange)) {
            return this.components.slice(inkRange.getStartComponent(), inkRange.getEndComponent() + 1);
        }
        return this.components;
    };

    /**
     * Set components for this input unit
     *
     * @method setComponents
     * @param {AbstractComponent[]} components
     */
    TextInputUnit.prototype.setComponents = function (components) {
        this.components = components;
    };

    // Export
    scope.TextInputUnit = TextInputUnit;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Parameters used for text recognition
     *
     * @class TextParameter
     * @extends AbstractParameter
     * @constructor
     */
    function TextParameter(obj) {
        scope.AbstractParameter.call(this, obj);
        this.textProperties = new scope.TextProperties();
    }

    /**
     * Inheritance property
     */
    TextParameter.prototype = new scope.AbstractParameter();

    /**
     * Constructor property
     */
    TextParameter.prototype.constructor = TextParameter;

    /**
     * Get recognition language
     *
     * @method getLanguage
     * @returns {String}
     */
    TextParameter.prototype.getLanguage = function () {
        return this.language;
    };

    /**
     * Set recognition language
     *
     * @method getLanguage
     * @param {String} language
     */
    TextParameter.prototype.setLanguage = function (language) {
        this.language = language;
    };

    /**
     * Get input mode
     *
     * @method getInputMode
     * @returns {String}
     */
    TextParameter.prototype.getInputMode = function () {
        return this.textInputMode;
    };

    /**
     * Set input mode
     *
     * @method setInputMode
     * @param {String} inputMode
     */
    TextParameter.prototype.setInputMode = function (inputMode) {
        this.textInputMode = inputMode;
    };

    /**
     * Get content types
     *
     * @method getContentTypes
     * @returns {Array}
     */
    TextParameter.prototype.getContentTypes = function () {
        return this.contentTypes;
    };

    /**
     * Set content types
     *
     * @method setContentTypes
     * @param {Array} contentTypes
     */
    TextParameter.prototype.setContentTypes = function (contentTypes) {
        this.contentTypes = contentTypes;
    };

    /**
     * Get SK
     *
     * @method getSubsetKnowledges
     * @returns {Array}
     */
    TextParameter.prototype.getSubsetKnowledges = function () {
        return this.subsetKnowledges;
    };

    /**
     * Set SK
     *
     * @method setSubsetKnowledges
     * @param {Array} subsetKnowledges
     */
    TextParameter.prototype.setSubsetKnowledges = function (subsetKnowledges) {
        this.subsetKnowledges = subsetKnowledges;
    };

    /**
     * Get user resources
     *
     * @method getUserResources
     * @returns {Array}
     */
    TextParameter.prototype.getUserResources = function () {
        return this.userResources;
    };

    /**
     * Set user resources
     *
     * @method setUserResources
     * @param {Array} userResources
     */
    TextParameter.prototype.setUserResources = function (userResources) {
        this.userResources = userResources;
    };

    /**
     * Get user LK words
     *
     * @method getUserLkWords
     * @returns {Array}
     */
    TextParameter.prototype.getUserLkWords = function () {
        return this.userLkWords;
    };

    /**
     * Set user LK words
     *
     * @method setUserLkWords
     * @param {Array} userLkWords
     */
    TextParameter.prototype.setUserLkWords = function (userLkWords) {
        this.userLkWords = userLkWords;
    };

    /**
     * Get result detail (e.g. TEXT, WORD ...)
     *
     * @method getResultDetail
     * @returns {String}
     */
    TextParameter.prototype.getResultDetail = function () {
        return this.resultDetail;
    };

    /**
     * Set result detail (e.g. TEXT, WORD ...)
     *
     * @method setResultDetail
     * @param {String} resultDetail
     */
    TextParameter.prototype.setResultDetail = function (resultDetail) {
        this.resultDetail = resultDetail;
    };

    /**
     * Get text properties
     *
     * @method getTextProperties
     * @returns {TextProperties}
     */
    TextParameter.prototype.getTextProperties = function () {
        return this.textProperties;
    };

    /**
     * Set text properties
     *
     * @method setTextProperties
     * @param {TextProperties} properties
     */
    TextParameter.prototype.setTextProperties = function (textProperties) {
        this.textProperties = textProperties;
    };

    // Export
    scope.TextParameter = TextParameter;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text recognition properties
     *
     * @class TextProperties
     * @constructor
     */
    function TextProperties() {
    }

    /**
     * Get the number of text candidates requested
     *
     * @method getTextCandidateListSize
     * @returns {Number}
     */
    TextProperties.prototype.getTextCandidateListSize = function () {
        return this.textCandidateListSize;
    };

    /**
     * Set the number of text candidates requested
     *
     * @method setTextCandidateListSize
     * @param {Number} textCandidateListSize
     */
    TextProperties.prototype.setTextCandidateListSize = function (textCandidateListSize) {
        this.textCandidateListSize = textCandidateListSize;
    };

    /**
     * Get the number of word candidates requested
     *
     * @method getWordCandidateListSize
     * @returns {Number}
     */
    TextProperties.prototype.getWordCandidateListSize = function () {
        return this.wordCandidateListSize;
    };

    /**
     * Set the number of word candidates requested
     *
     * @method setWordCandidateListSize
     * @param {Number} wordCandidateListSize
     */
    TextProperties.prototype.setWordCandidateListSize = function (wordCandidateListSize) {
        this.wordCandidateListSize = wordCandidateListSize;
    };

    /**
     * Get the number of word prediction candidates requested
     *
     * @method getWordPredictionListSize
     * @returns {Number}
     */
    TextProperties.prototype.getWordPredictionListSize = function () {
        return this.wordPredictionListSize;
    };

    /**
     * Set the number of word prediction candidates requested
     *
     * @method setWordPredictionListSize
     * @param {Number} wordPredictionListSize
     */
    TextProperties.prototype.setWordPredictionListSize = function (wordPredictionListSize) {
        this.wordPredictionListSize = wordPredictionListSize;
    };

    /**
     * Get the number of word completion candidates requested
     *
     * @method getWordCompletionListSize
     * @returns {Number}
     */
    TextProperties.prototype.getWordCompletionListSize = function () {
        return this.wordCompletionListSize;
    };

    /**
     * Set the number of word completion candidates requested
     *
     * @method setWordCompletionListSize
     * @param {Number} wordCompletionListSize
     */
    TextProperties.prototype.setWordCompletionListSize = function (wordCompletionListSize) {
        this.wordCompletionListSize = wordCompletionListSize;
    };

    /**
     * Get the number of character candidates requested
     *
     * @method getCharacterCandidateListSize
     * @returns {Number}
     */
    TextProperties.prototype.getCharacterCandidateListSize = function () {
        return this.characterCandidateListSize;
    };

    /**
     * Set the number of character candidates requested
     *
     * @method setCharacterCandidateListSize
     * @param {Number} characterCandidateListSize
     */
    TextProperties.prototype.setCharacterCandidateListSize = function (characterCandidateListSize) {
        this.characterCandidateListSize = characterCandidateListSize;
    };

    /**
     * Get the discard case variations
     *
     * @method getDiscardCaseVariations
     * @returns {boolean}
     */
    TextProperties.prototype.getDiscardCaseVariations = function () {
        return this.discardCaseVariations;
    };

    /**
     * Set the discard case variations
     *
     * @method setDiscardCaseVariations
     * @param {boolean} discardCaseVariations
     */
    TextProperties.prototype.setDiscardCaseVariations = function (discardCaseVariations) {
        this.discardCaseVariations = discardCaseVariations;
    };

    /**
     * Get the discard accentuation variations
     *
     * @method getDiscardAccentuationVariations
     * @returns {boolean}
     */
    TextProperties.prototype.getDiscardAccentuationVariations = function () {
        return this.discardAccentuationVariations;
    };

    /**
     * Set the discard accentuation variations
     *
     * @method setDiscardAccentuationVariations
     * @param {boolean} discardAccentuationVariations
     */
    TextProperties.prototype.setDiscardAccentuationVariations = function (discardAccentuationVariations) {
        this.discardAccentuationVariations = discardAccentuationVariations;
    };

    /**
     * Get disable spatial ordering
     *
     * @method getDisableSpatialOrdering
     * @returns {Boolean}
     */
    TextProperties.prototype.getDisableSpatialOrdering = function () {
        return this.disableSpatialOrdering;
    };

    /**
     * Set disable spatial ordering
     *
     * @method setDisableSpatialOrdering
     * @param {Boolean} disableSpatialOrdering
     */
    TextProperties.prototype.setDisableSpatialOrdering = function (disableSpatialOrdering) {
        this.disableSpatialOrdering = disableSpatialOrdering;
    };

    /**
     * Get glyph distortion
     *
     * @method getGlyphDistortion
     * @returns {Number}
     */
    TextProperties.prototype.getGlyphDistortion = function () {
        return this.glyphDistortion;
    };

    /**
     * Set glyph distortion
     *
     * @method setGlyphDistortion
     * @param {Number} glyphDistortion
     */
    TextProperties.prototype.setGlyphDistortion = function (glyphDistortion) {
        this.glyphDistortion = glyphDistortion;
    };

    /**
     * Get enable out of lexicon
     *
     * @method getEnableOutOfLexicon
     * @returns {Boolean}
     */
    TextProperties.prototype.getEnableOutOfLexicon = function () {
        return this.enableOutOfLexicon;
    };

    /**
     * Set enable out of lexicon
     *
     * @method setEnableOutOfLexicon
     * @param {Boolean} enableOutOfLexicon
     */
    TextProperties.prototype.setEnableOutOfLexicon = function (enableOutOfLexicon) {
        this.enableOutOfLexicon = enableOutOfLexicon;
    };

    /**
     * Get spelling distortion
     *
     * @method getSpellingDistortion
     * @returns {Number}
     */
    TextProperties.prototype.getSpellingDistortion = function () {
        return this.spellingDistortion;
    };

    /**
     * Set spelling distortion
     *
     * @method setSpellingDistortion
     * @param {Number} spellingDistortion
     */
    TextProperties.prototype.setSpellingDistortion = function (spellingDistortion) {
        this.spellingDistortion = spellingDistortion;
    };

    // Export
    scope.TextProperties = TextProperties;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition input object for text recognition
     *
     * @class TextRecognitionInput
     * @extends AbstractRecognitionInput
     * @constructor
     */
    function TextRecognitionInput() {
    }

    /**
     * Inheritance property
     */
    TextRecognitionInput.prototype = new scope.AbstractRecognitionInput();

    /**
     * Constructor property
     */
    TextRecognitionInput.prototype.constructor = TextRecognitionInput;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {TextParameter}
     */
    TextRecognitionInput.prototype.getParameters = function () {
        return this.textParameter;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {TextParameter} parameters
     */
    TextRecognitionInput.prototype.setParameters = function (parameters) {
        this.textParameter = parameters;
    };

    /**
     * Get input units
     *
     * @method getInputUnits
     * @param {TextInkRange} [inkRange]
     * @returns {TextInputUnit[]}
     */
    TextRecognitionInput.prototype.getInputUnits = function (inkRange) {
        if (inkRange && (inkRange instanceof scope.TextInkRange)) {
            return this.inputUnits.slice(inkRange.getStartUnit(), inkRange.getEndUnit() + 1);
        }
        return this.inputUnits;
    };

    /**
     * Set input units
     *
     * @method setInputUnits
     * @param {TextInputUnit[]} inputUnits
     */
    TextRecognitionInput.prototype.setInputUnits = function (inputUnits) {
        this.inputUnits = inputUnits;
    };

    // Export
    scope.TextRecognitionInput = TextRecognitionInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition data for text input
     *
     * @class TextRecognitionData
     * @extends AbstractRecognitionData
     * @constructor
     */
    function TextRecognitionData() {
    }

    /**
     * Inheritance property
     */
    TextRecognitionData.prototype = new scope.AbstractRecognitionData();

    /**
     * Constructor property
     */
    TextRecognitionData.prototype.constructor = TextRecognitionData;

    /**
     * Get text input
     *
     * @method getTextRecognitionInput
     * @returns {TextRecognitionInput} inputMode
     */
    TextRecognitionData.prototype.getTextRecognitionInput = function () {
        return this.textInput;
    };

    /**
     * Set text input
     *
     * @method setTextRecognitionInput
     * @param {TextRecognitionInput} input
     */
    TextRecognitionData.prototype.setTextRecognitionInput = function (input) {
        this.textInput = JSON.stringify(input);
    };

    // Export
    scope.TextRecognitionData = TextRecognitionData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket start text recognition message
     *
     * @class TextStartRequestWSMessage
     * @extends AbstractStartRequestWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function TextStartRequestWSMessage(obj) {
        scope.AbstractStartRequestWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    TextStartRequestWSMessage.prototype = new scope.AbstractStartRequestWSMessage();

    /**
     * Constructor property
     */
    TextStartRequestWSMessage.prototype.constructor = TextStartRequestWSMessage;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {TextParameter}
     */
    TextStartRequestWSMessage.prototype.getParameters = function () {
        return this.textParameter;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {TextParameter} parameters
     */
    TextStartRequestWSMessage.prototype.setParameters = function (parameters) {
        this.textParameter = parameters;
    };

    /**
     * Get input units
     *
     * @method getInputUnits
     * @returns {TextInputUnit[]}
     */
    TextStartRequestWSMessage.prototype.getInputUnits = function () {
        return this.inputUnits;
    };

    /**
     * Set input units
     *
     * @method setInputUnits
     * @param {TextInputUnit[]} inputUnits
     */
    TextStartRequestWSMessage.prototype.setInputUnits = function (inputUnits) {
        this.inputUnits = inputUnits;
    };

    // Export
    scope.TextStartRequestWSMessage = TextStartRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket continue text recognition message
     *
     * @class TextContinueRequestWSMessage
     * @extends AbstractContinueRequestWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function TextContinueRequestWSMessage(obj) {
        scope.AbstractContinueRequestWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    TextContinueRequestWSMessage.prototype = new scope.AbstractContinueRequestWSMessage();

    /**
     * Constructor property
     */
    TextContinueRequestWSMessage.prototype.constructor = TextContinueRequestWSMessage;

    /**
     * Get input units
     *
     * @method getInputUnits
     * @returns {TextInputUnit[]}
     */
    TextContinueRequestWSMessage.prototype.getInputUnits = function () {
        return this.inputUnits;
    };

    /**
     * Set input units
     *
     * @method setInputUnits
     * @param {TextInputUnit[]} inputUnits
     */
    TextContinueRequestWSMessage.prototype.setInputUnits = function (inputUnits) {
        this.inputUnits = inputUnits;
    };

    // Export
    scope.TextContinueRequestWSMessage = TextContinueRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Parameters used for shape recognition
     *
     * @class ShapeParameter
     * @extends AbstractParameter
     * @constructor
     */
    function ShapeParameter(obj) {
        scope.AbstractParameter.call(this, obj);
    }

    /**
     * Inheritance property
     */
    ShapeParameter.prototype = new scope.AbstractParameter();

    /**
     * Constructor property
     */
    ShapeParameter.prototype.constructor = ShapeParameter;

    /**
     * Get the sensitivity of the reject detection
     *
     * @method getRejectDetectionSensitivity
     * @returns {Boolean}
     */
    ShapeParameter.prototype.getRejectDetectionSensitivity = function () {
        return this.rejectDetectionSensitivity;
    };

    /**
     * Set the sensitivity of the reject detection
     *
     * @method setRejectDetectionSensitivity
     * @param {Boolean} rejectDetectionSensitivity
     */
    ShapeParameter.prototype.setRejectDetectionSensitivity = function (rejectDetectionSensitivity) {
        this.rejectDetectionSensitivity = rejectDetectionSensitivity;
    };

    /**
     * Get the beautification
     *
     * @method hasBeautification
     * @returns {Boolean}
     */
    ShapeParameter.prototype.hasBeautification = function () {
        return this.doBeautification;
    };

    /**
     * Set the beautification
     *
     * @method setBeautification
     * @param {Boolean} doBeautification
     */
    ShapeParameter.prototype.setBeautification = function (doBeautification) {
        this.doBeautification = doBeautification;
    };

    /**
     * Get the user resources
     *
     * @method getUserResources
     * @returns {Array}
     */
    ShapeParameter.prototype.getUserResources = function () {
        return this.userResources;
    };

    /**
     * Set the user resources
     *
     * @method setUserResources
     * @param {Array} userResources
     */
    ShapeParameter.prototype.setUserResources = function (userResources) {
        this.userResources = userResources;
    };

    // Export
    scope.ShapeParameter = ShapeParameter;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition input object for shape recognition
     *
     * @class ShapeRecognitionInput
     * @extends AbstractRecognitionInput
     * @constructor
     */
    function ShapeRecognitionInput() {
    }

    /**
     * Inheritance property
     */
    ShapeRecognitionInput.prototype = new scope.AbstractRecognitionInput();

    /**
     * Constructor property
     */
    ShapeRecognitionInput.prototype.constructor = ShapeRecognitionInput;

    /**
     * Get input components
     *
     * @method getComponents
     * @returns {AbstractComponent[]}
     */
    ShapeRecognitionInput.prototype.getComponents = function () {
        return this.components;
    };

    /**
     * Set input components
     *
     * @method setComponents
     * @param {AbstractComponent[]} components
     */
    ShapeRecognitionInput.prototype.setComponents = function (components) {
        this.components = components;
    };

    /**
     * Get the beautification
     *
     * @method getDoBeautification
     * @returns {Boolean}
     */
    ShapeRecognitionInput.prototype.getDoBeautification = function () {
        return this.doBeautification;
    };

    /**
     * Set the beautification
     *
     * @method setDoBeautification
     * @param {Boolean} doBeautification
     */
    ShapeRecognitionInput.prototype.setDoBeautification = function (doBeautification) {
        this.doBeautification = doBeautification;
    };

    /**
     * Get the sensitivity of the reject detection
     *
     * @method getRejectDetectionSensitivity
     * @returns {Number}
     */
    ShapeRecognitionInput.prototype.getRejectDetectionSensitivity = function () {
        return this.rejectDetectionSensitivity;
    };

    /**
     * Set the sensitivity of the reject detection
     *
     * @method setRejectDetectionSensitivity
     * @param {Number} rejectDetectionSensitivity
     */
    ShapeRecognitionInput.prototype.setRejectDetectionSensitivity = function (rejectDetectionSensitivity) {
        this.rejectDetectionSensitivity = rejectDetectionSensitivity;
    };

    // Export
    scope.ShapeRecognitionInput = ShapeRecognitionInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition data for shape input
     *
     * @class ShapeRecognitionData
     * @extends AbstractRecognitionData
     * @constructor
     */
    function ShapeRecognitionData() {
    }

    /**
     * Inheritance property
     */
    ShapeRecognitionData.prototype = new scope.AbstractRecognitionData();

    /**
     * Constructor property
     */
    ShapeRecognitionData.prototype.constructor = ShapeRecognitionData;

    /**
     * Get shape input
     *
     * @method getShapeRecognitionInput
     * @returns {ShapeRecognitionInput}
     */
    ShapeRecognitionData.prototype.getShapeRecognitionInput = function () {
        return this.shapeInput;
    };

    /**
     * Set shape input
     *
     * @method setShapeRecognitionInput
     * @param {ShapeRecognitionInput} input
     */
    ShapeRecognitionData.prototype.setShapeRecognitionInput = function (input) {
        this.shapeInput = JSON.stringify(input);
    };

    // Export
    scope.ShapeRecognitionData = ShapeRecognitionData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Parameters used for math recognition
     *
     * @class MathParameter
     * @extends AbstractParameter
     * @constructor
     */
    function MathParameter(obj) {
        scope.AbstractParameter.call(this, obj);
        this.resultTypes = [];
        this.userResources = [];
    }

    /**
     * Inheritance property
     */
    MathParameter.prototype = new scope.AbstractParameter();

    /**
     * Constructor property
     */
    MathParameter.prototype.constructor = MathParameter;

    /**
     * Get the math result types (e.g. LaTex, MathML, SymbolTree)
     *
     * @method getResultTypes
     * @returns {Array}
     */
    MathParameter.prototype.getResultTypes = function () {
        return this.resultTypes;
    };

    /**
     * Set the math result types (e.g. LaTex, MathML, SymbolTree)
     *
     * @method setResultTypes
     * @param {Array} resultTypes
     */
    MathParameter.prototype.setResultTypes = function (resultTypes) {
        this.resultTypes = resultTypes;
    };

    /**
     * Get the math result result orientation to columnar operations
     *
     * @method isColumnar
     * @returns {Boolean}
     */
    MathParameter.prototype.isColumnar = function () {
        return this.columnarOperation;
    };

    /**
     * Set the math result orientation to columnar operations
     *
     * @method setColumnar
     * @param  {Boolean} columnar
     */
    MathParameter.prototype.setColumnar = function (columnar) {
        this.columnarOperation = columnar;
    };

    /**
     * Get the user resources
     *
     * @method getUserResources
     * @returns {Array}
     */
    MathParameter.prototype.getUserResources = function () {
        return this.userResources;
    };

    /**
     * Set the user resources
     *
     * @method setUserResources
     * @param {Array} userResources
     */
    MathParameter.prototype.setUserResources = function (userResources) {
        this.userResources = userResources;
    };

    /**
     * Get the sensitivity of the scratch-out detection
     *
     * @method getScratchOutDetectionSensitivity
     * @returns {Number}
     */
    MathParameter.prototype.getScratchOutDetectionSensitivity = function () {
        return this.scratchOutDetectionSensitivity;
    };

    /**
     * Set the sensitivity of the scratch-out detection
     *
     * @method setScratchOutDetectionSensitivity
     * @param {Number} scratchOutDetectionSensitivity
     */
    MathParameter.prototype.setScratchOutDetectionSensitivity = function (scratchOutDetectionSensitivity) {
        this.scratchOutDetectionSensitivity = scratchOutDetectionSensitivity;
    };

    // Export
    scope.MathParameter = MathParameter;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition input object for math recognition
     *
     * @class MathRecognitionInput
     * @extends AbstractRecognitionInput
     * @constructor
     */
    function MathRecognitionInput() {
    }

    /**
     * Inheritance property
     */
    MathRecognitionInput.prototype = new scope.AbstractRecognitionInput();

    /**
     * Constructor property
     */
    MathRecognitionInput.prototype.constructor = MathRecognitionInput;

    /**
     * Get input components
     *
     * @method getComponents
     * @returns {AbstractComponent[]}
     */
    MathRecognitionInput.prototype.getComponents = function () {
        return this.components;
    };

    /**
     * Set input components
     *
     * @method setComponents
     * @param {AbstractComponent[]} components
     */
    MathRecognitionInput.prototype.setComponents = function (components) {
        this.components = components;
    };

    /**
     * Get the math result types (e.g. LaTex, MathML, SymbolTree)
     *
     * @method getResultTypes
     * @returns {Array}
     */
    MathRecognitionInput.prototype.getResultTypes = function () {
        return this.resultTypes;
    };

    /**
     * Set the math result types (e.g. LaTex, MathML, SymbolTree)
     *
     * @method setResultTypes
     * @param {Array} resultTypes
     */
    MathRecognitionInput.prototype.setResultTypes = function (resultTypes) {
        this.resultTypes = resultTypes;
    };

    /**
     * Get the math result result orientation to columnar operations
     *
     * @method isColumnar
     * @returns {Boolean}
     */
    MathRecognitionInput.prototype.isColumnar = function () {
        return this.columnarOperation;
    };

    /**
     * Set the math result orientation to columnar operations
     *
     * @method setColumnar
     * @param  {Boolean} columnar
     */
    MathRecognitionInput.prototype.setColumnar = function (columnar) {
        this.columnarOperation = columnar;
    };

    /**
     * Get the user resources
     *
     * @method getUserResources
     * @returns {Array}
     */
    MathRecognitionInput.prototype.getUserResources = function () {
        return this.userResources;
    };

    /**
     * Set the user resources
     *
     * @method setUserResources
     * @param {Array} userResources
     */
    MathRecognitionInput.prototype.setUserResources = function (userResources) {
        this.userResources = userResources;
    };

    /**
     * Get the sensitivity of the scratch-out detection
     *
     * @method getScratchOutDetectionSensitivity
     * @returns {Number}
     */
    MathRecognitionInput.prototype.getScratchOutDetectionSensitivity = function () {
        return this.scratchOutDetectionSensitivity;
    };

    /**
     * Set the sensitivity of the scratch-out detection
     *
     * @method setScratchOutDetectionSensitivity
     * @param {Number} scratchOutDetectionSensitivity
     */
    MathRecognitionInput.prototype.setScratchOutDetectionSensitivity = function (scratchOutDetectionSensitivity) {
        this.scratchOutDetectionSensitivity = scratchOutDetectionSensitivity;
    };
    // Export
    scope.MathRecognitionInput = MathRecognitionInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition data for math input
     *
     * @class MathRecognitionData
     * @extends AbstractRecognitionData
     * @constructor
     */
    function MathRecognitionData() {
    }

    /**
     * Inheritance property
     */
    MathRecognitionData.prototype = new scope.AbstractRecognitionData();

    /**
     * Constructor property
     */
    MathRecognitionData.prototype.constructor = MathRecognitionData;

    /**
     * Get math input
     *
     * @method getMathRecognitionInput
     * @returns {MathRecognitionInput}
     */
    MathRecognitionData.prototype.getMathRecognitionInput = function () {
        return this.mathInput;
    };

    /**
     * Set math input
     *
     * @method setMathRecognitionInput
     * @param {MathRecognitionInput} input
     */
    MathRecognitionData.prototype.setMathRecognitionInput = function (input) {
        this.mathInput = JSON.stringify(input);

    };

    // Export
    scope.MathRecognitionData = MathRecognitionData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket start math recognition message
     *
     * @class MathStartRequestWSMessage
     * @extends AbstractStartRequestWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function MathStartRequestWSMessage(obj) {
        scope.AbstractStartRequestWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    MathStartRequestWSMessage.prototype = new scope.AbstractStartRequestWSMessage();

    /**
     * Constructor property
     */
    MathStartRequestWSMessage.prototype.constructor = MathStartRequestWSMessage;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {MathParameter}
     */
    MathStartRequestWSMessage.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {MathParameter} parameters
     */
    MathStartRequestWSMessage.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Get components
     *
     * @method getComponents
     * @returns {MathInputUnit[]}
     */
    MathStartRequestWSMessage.prototype.getComponents = function () {
        return this.components;
    };

    /**
     * Set components
     *
     * @method setComponents
     * @param {MathInputUnit[]} components
     */
    MathStartRequestWSMessage.prototype.setComponents = function (components) {
        this.components = components;
    };

    // Export
    scope.MathStartRequestWSMessage = MathStartRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket continue math recognition message
     *
     * @class MathContinueRequestWSMessage
     * @extends AbstractContinueRequestWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function MathContinueRequestWSMessage(obj) {
        this.type = 'continue';
        scope.AbstractContinueRequestWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    MathContinueRequestWSMessage.prototype = new scope.AbstractContinueRequestWSMessage();

    /**
     * Constructor property
     */
    MathContinueRequestWSMessage.prototype.constructor = MathContinueRequestWSMessage;

    /**
     * Get components
     *
     * @method getComponents
     * @returns {MathInputUnit[]}
     */
    MathContinueRequestWSMessage.prototype.getComponents = function () {
        return this.components;
    };

    /**
     * Set components
     *
     * @method setComponents
     * @param {MathInputUnit[]} components
     */
    MathContinueRequestWSMessage.prototype.setComponents = function (components) {
        this.components = components;
    };

    // Export
    scope.MathContinueRequestWSMessage = MathContinueRequestWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract music input component
     *
     * @class AbstractMusicInputComponent
     * @extends AbstractComponent
     * @constructor
     */
    function AbstractMusicInputComponent() {
    }

    /**
     * Inheritance property
     */
    AbstractMusicInputComponent.prototype = new scope.AbstractComponent();

    /**
     * Constructor property
     */
    AbstractMusicInputComponent.prototype.constructor = AbstractMusicInputComponent;

    /**
     * Get input component bounding-box
     *
     * @method getBoundingBox
     * @returns {Rectangle}
     */
    AbstractMusicInputComponent.prototype.getBoundingBox = function () {
        return this.boundingBox;
    };

    /**
     * Set input component bounding-box
     *
     * @method setBoundingBox
     * @param {Rectangle} boundingBox
     */
    AbstractMusicInputComponent.prototype.setBoundingBox = function (boundingBox) {
        this.boundingBox = boundingBox;
    };

    // Export
    scope.AbstractMusicInputComponent = AbstractMusicInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Accidental input component
     *
     * @class MusicAccidentalInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicAccidentalInputComponent() {
        this.type = 'accidental';
    }

    /**
     * Inheritance property
     */
    MusicAccidentalInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicAccidentalInputComponent.prototype.constructor = MusicAccidentalInputComponent;

    /**
     * Get accidental input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicAccidentalInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set accidental input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicAccidentalInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicAccidentalInputComponent = MusicAccidentalInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Arpeggiate input component
     *
     * @class MusicArpeggiateInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicArpeggiateInputComponent() {
        this.type = 'arpeggiate';
    }

    /**
     * Inheritance property
     */
    MusicArpeggiateInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicArpeggiateInputComponent.prototype.constructor = MusicArpeggiateInputComponent;

    /**
     * Get arpeggiate input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicArpeggiateInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set arpeggiate input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicArpeggiateInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicArpeggiateInputComponent = MusicArpeggiateInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music bar input
     *
     * @class MusicBarInput
     * @constructor
     */
    function MusicBarInput() {
    }

    /**
     * Get repeat direction
     *
     * @method getRepeatDirection
     * @returns {String}
     */
    MusicBarInput.prototype.getRepeatDirection = function () {
        return this.repeatDirection;
    };

    /**
     * Set repeat direction
     *
     * @method setRepeatDirection
     * @param {String} repeatDirection
     */
    MusicBarInput.prototype.setRepeatDirection = function (repeatDirection) {
        this.repeatDirection = repeatDirection;
    };

    /**
     * Get style
     *
     * @method getStyle
     * @returns {String}
     */
    MusicBarInput.prototype.getStyle = function () {
        return this.style;
    };

    /**
     * Set style
     *
     * @method setStyle
     * @param {String} style
     */
    MusicBarInput.prototype.setStyle = function (style) {
        this.style = style;
    };

    // Export
    scope.MusicBarInput = MusicBarInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Bar input component
     *
     * @class MusicBarInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicBarInputComponent() {
        this.type = 'bar';
        this.value = new scope.MusicBarInput();
    }

    /**
     * Inheritance property
     */
    MusicBarInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicBarInputComponent.prototype.constructor = MusicBarInputComponent;

    /**
     * Get bar input component value
     *
     * @method getValue
     * @returns {MusicBarInput}
     */
    MusicBarInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set bar input component value
     *
     * @method setValue
     * @param {MusicBarInput} value
     */
    MusicBarInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicBarInputComponent = MusicBarInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music beam input
     *
     * @class MusicBeamInput
     * @constructor
     */
    function MusicBeamInput() {
    }

    /**
     * Get placement
     *
     * @method getPlacement
     * @returns {String}
     */
    MusicBeamInput.prototype.getPlacement = function () {
        return this.placement;
    };

    /**
     * Set placement
     *
     * @method setPlacement
     * @param {String} placement
     */
    MusicBeamInput.prototype.setPlacement = function (placement) {
        this.placement = placement;
    };

    /**
     * Get slope
     *
     * @method getSlope
     * @returns {String}
     */
    MusicBeamInput.prototype.getSlope = function () {
        return this.slope;
    };

    /**
     * Set slope
     *
     * @method setSlope
     * @param {String} slope
     */
    MusicBeamInput.prototype.setSlope = function (slope) {
        this.slope = slope;
    };

    /**
     * Get left count
     *
     * @method getLeftCount
     * @returns {Number}
     */
    MusicBeamInput.prototype.getLeftCount = function () {
        return this.leftCount;
    };

    /**
     * Set left count
     *
     * @method setLeftCount
     * @param {Number} leftCount
     */
    MusicBeamInput.prototype.setLeftCount = function (leftCount) {
        this.leftCount = leftCount;
    };

    /**
     * Get right count
     *
     * @method getRightCount
     * @returns {Number}
     */
    MusicBeamInput.prototype.getRightCount = function () {
        return this.rightCount;
    };

    /**
     * Set right count
     *
     * @method setRightCount
     * @param {Number} rightCount
     */
    MusicBeamInput.prototype.setRightCount = function (rightCount) {
        this.rightCount = rightCount;
    };

    /**
     * Get gap
     *
     * @method getGap
     * @returns {Number}
     */
    MusicBeamInput.prototype.getGap = function () {
        return this.gap;
    };

    /**
     * Set gap
     *
     * @method setGap
     * @param {Number} gap
     */
    MusicBeamInput.prototype.setGap = function (gap) {
        this.gap = gap;
    };

    // Export
    scope.MusicBeamInput = MusicBeamInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Beam input component
     *
     * @class MusicBeamInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicBeamInputComponent() {
        this.type = 'beam';
        this.value = new scope.MusicBeamInput();
    }

    /**
     * Inheritance property
     */
    MusicBeamInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicBeamInputComponent.prototype.constructor = MusicBeamInputComponent;

    /**
     * Get beam input component value
     *
     * @method getValue
     * @returns {MusicBeamInput}
     */
    MusicBeamInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set beam input component value
     *
     * @method setValue
     * @param {MusicBeamInput} value
     */
    MusicBeamInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicBeamInputComponent = MusicBeamInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music clef input
     * default values: symbol='G', octave=0
     *
     * @class MusicClefInput
     * @constructor
     */
    function MusicClefInput() {
        this.symbol = 'G';
        this.octave = 0;
    }

    /**
     * Get y anchor
     *
     * @method getYAnchor
     * @returns {Number}
     */
    MusicClefInput.prototype.getYAnchor = function () {
        return this.yAnchor;
    };

    /**
     * Set y anchor
     *
     * @method setYAnchor
     * @param {Number} yAnchor
     */
    MusicClefInput.prototype.setYAnchor = function (yAnchor) {
        this.yAnchor = yAnchor;
    };

    /**
     * Get octave
     *
     * @method getOctave
     * @returns {Number}
     */
    MusicClefInput.prototype.getOctave = function () {
        return this.octave;
    };

    /**
     * Set octave
     *
     * @method setOctave
     * @param {Number} octave
     */
    MusicClefInput.prototype.setOctave = function (octave) {
        this.octave = octave;
    };

    /**
     * Get symbol
     *
     * @method getSymbol
     * @returns {String}
     */
    MusicClefInput.prototype.getSymbol = function () {
        return this.symbol;
    };

    /**
     * Set symbol
     *
     * @method setSymbol
     * @param {String} symbol
     */
    MusicClefInput.prototype.setSymbol = function (symbol) {
        this.symbol = symbol;
    };

    // Export
    scope.MusicClefInput = MusicClefInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Clef input component
     * default clef values: symbol='G', octave=0
     *
     * @class MusicClefInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicClefInputComponent() {
        this.type = 'clef';
        this.value = new scope.MusicClefInput();
    }

    /**
     * Inheritance property
     */
    MusicClefInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicClefInputComponent.prototype.constructor = MusicClefInputComponent;

    /**
     * Get clef input component value
     *
     * @method getValue
     * @returns {MusicClefInput}
     */
    MusicClefInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set clef input component value
     *
     * @method setValue
     * @param {MusicClefInput} value
     */
    MusicClefInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicClefInputComponent = MusicClefInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music decoration input
     *
     * @class MusicDecorationInput
     * @constructor
     */
    function MusicDecorationInput() {
    }

    /**
     * Get symbol
     *
     * @method getSymbol
     * @returns {String}
     */
    MusicDecorationInput.prototype.getSymbol = function () {
        return this.symbol;
    };

    /**
     * Set symbol
     *
     * @method setSymbol
     * @param {String} symbol
     */
    MusicDecorationInput.prototype.setSymbol = function (symbol) {
        this.symbol = symbol;
    };

    /**
     * Get placement
     *
     * @method getPlacement
     * @returns {String}
     */
    MusicDecorationInput.prototype.getPlacement = function () {
        return this.placement;
    };

    /**
     * Set placement
     *
     * @method setPlacement
     * @param {String} placement
     */
    MusicDecorationInput.prototype.setPlacement = function (placement) {
        this.placement = placement;
    };

    // Export
    scope.MusicDecorationInput = MusicDecorationInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Decoration input component
     *
     * @class MusicDecorationInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicDecorationInputComponent() {
        this.type = 'decoration';
        this.value = new scope.MusicDecorationInput();
    }

    /**
     * Inheritance property
     */
    MusicDecorationInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicDecorationInputComponent.prototype.constructor = MusicDecorationInputComponent;

    /**
     * Get decoration input component value
     *
     * @method getValue
     * @returns {MusicDecorationInput}
     */
    MusicDecorationInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set decoration input component value
     *
     * @method setValue
     * @param {MusicDecorationInput} value
     */
    MusicDecorationInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicDecorationInputComponent = MusicDecorationInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Dots input component
     *
     * @class MusicDotsInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicDotsInputComponent() {
        this.type = 'dots';
    }

    /**
     * Inheritance property
     */
    MusicDotsInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicDotsInputComponent.prototype.constructor = MusicDotsInputComponent;

    /**
     * Get dots input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicDotsInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set dots input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicDotsInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicDotsInputComponent = MusicDotsInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Head input component
     *
     * @class MusicHeadInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicHeadInputComponent() {
        this.type = 'head';
    }

    /**
     * Inheritance property
     */
    MusicHeadInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicHeadInputComponent.prototype.constructor = MusicHeadInputComponent;

    /**
     * Get head input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicHeadInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set head input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicHeadInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicHeadInputComponent = MusicHeadInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Ledger line input component
     *
     * @class MusicLedgerLineInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicLedgerLineInputComponent() {
        this.type = 'ledgerLine';
    }

    /**
     * Inheritance property
     */
    MusicLedgerLineInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicLedgerLineInputComponent.prototype.constructor = MusicLedgerLineInputComponent;

    // Export
    scope.MusicLedgerLineInputComponent = MusicLedgerLineInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Rest input component
     *
     * @class MusicRestInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicRestInputComponent() {
        this.type = 'rest';
    }

    /**
     * Inheritance property
     */
    MusicRestInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicRestInputComponent.prototype.constructor = MusicRestInputComponent;

    /**
     * Get rest input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicRestInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set rest input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicRestInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicRestInputComponent = MusicRestInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Stem input component
     *
     * @class MusicStemInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicStemInputComponent() {
        this.type = 'stem';
    }

    /**
     * Inheritance property
     */
    MusicStemInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicStemInputComponent.prototype.constructor = MusicStemInputComponent;

    /**
     * Get stem input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicStemInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set stem input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicStemInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicStemInputComponent = MusicStemInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Tie ro slur input component
     *
     * @class MusicTieOrSlurInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicTieOrSlurInputComponent() {
        this.type = 'tieOrSlur';
    }

    /**
     * Inheritance property
     */
    MusicTieOrSlurInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicTieOrSlurInputComponent.prototype.constructor = MusicTieOrSlurInputComponent;

    /**
     * Get tie or slur input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicTieOrSlurInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set tie or slur input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicTieOrSlurInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicTieOrSlurInputComponent = MusicTieOrSlurInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Time signature input component
     *
     * @class MusicTimeSignatureInputComponent
     * @extends AbstractMusicInputComponent
     * @constructor
     */
    function MusicTimeSignatureInputComponent() {
        this.type = 'timeSignature';
    }

    /**
     * Inheritance property
     */
    MusicTimeSignatureInputComponent.prototype = new scope.AbstractMusicInputComponent();

    /**
     * Constructor property
     */
    MusicTimeSignatureInputComponent.prototype.constructor = MusicTimeSignatureInputComponent;

    /**
     * Get time signature input component value
     *
     * @method getValue
     * @returns {String}
     */
    MusicTimeSignatureInputComponent.prototype.getValue = function () {
        return this.value;
    };

    /**
     * Set time signature input component value
     *
     * @method setValue
     * @param {String} value
     */
    MusicTimeSignatureInputComponent.prototype.setValue = function (value) {
        this.value = value;
    };

    // Export
    scope.MusicTimeSignatureInputComponent = MusicTimeSignatureInputComponent;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represents a staff used for music recognition
     * default values: count=5, gap=20
     *
     * @class MusicStaff
     * @constructor
     */
    function MusicStaff() {
        this.count = 5;
        this.gap = 20;
    }

    /**
     * Get the lines count
     *
     * @method getCount
     * @returns {Number}
     */
    MusicStaff.prototype.getCount = function () {
        return this.count;
    };

    /**
     * Set the lines count
     *
     * @method setCount
     * @param {Number} count
     */
    MusicStaff.prototype.setCount = function (count) {
        this.count = count;
    };

    /**
     * Get the spacing from the top
     *
     * @method getTop
     * @returns {Number}
     */
    MusicStaff.prototype.getTop = function () {
        return this.top;
    };

    /**
     * Set the spacing from the top
     *
     * @method setTop
     * @param {Number} top
     */
    MusicStaff.prototype.setTop = function (top) {
        this.top = top;
    };

    /**
     * Get the gap between lines
     *
     * @method getGap
     * @returns {Number}
     */
    MusicStaff.prototype.getGap = function () {
        return this.gap;
    };

    /**
     * Set the gap between lines
     *
     * @method setGap
     * @param {Number} gap
     */
    MusicStaff.prototype.setGap = function (gap) {
        this.gap = gap;
    };

    // Export
    scope.MusicStaff = MusicStaff;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Parameters used for music recognition
     *
     * @class MusicParameter
     * @extends AbstractParameter
     * @constructor
     */
    function MusicParameter(obj) {
        scope.AbstractParameter.call(this, obj);
        this.resultTypes = [];
        this.userResources = [];
    }

    /**
     * Inheritance property
     */
    MusicParameter.prototype = new scope.AbstractParameter();

    /**
     * Constructor property
     */
    MusicParameter.prototype.constructor = MusicParameter;

    /**
     * Get the music result types (e.g. MusicXML, ScoreTree)
     *
     * @method getResultTypes
     * @returns {Array}
     */
    MusicParameter.prototype.getResultTypes = function () {
        return this.resultTypes;
    };

    /**
     * Set the music result types (e.g. MusicXML, ScoreTree)
     *
     * @method setResultTypes
     * @param {Array} resultTypes
     */
    MusicParameter.prototype.setResultTypes = function (resultTypes) {
        this.resultTypes = resultTypes;
    };

    /**
     * Get the user resources
     *
     * @method getUserResources
     * @returns {Array}
     */
    MusicParameter.prototype.getUserResources = function () {
        return this.userResources;
    };

    /**
     * Set the user resources
     *
     * @method setUserResources
     * @param {Array} userResources
     */
    MusicParameter.prototype.setUserResources = function (userResources) {
        this.userResources = userResources;
    };

    /**
     * Get the sensitivity of the scratch-out detection
     *
     * @method getScratchOutDetectionSensitivity
     * @returns {Number}
     */
    MusicParameter.prototype.getScratchOutDetectionSensitivity = function () {
        return this.scratchOutDetectionSensitivity;
    };

    /**
     * Set the sensitivity of the scratch-out detection
     *
     * @method setScratchOutDetectionSensitivity
     * @param {Number} scratchOutDetectionSensitivity
     */
    MusicParameter.prototype.setScratchOutDetectionSensitivity = function (scratchOutDetectionSensitivity) {
        this.scratchOutDetectionSensitivity = scratchOutDetectionSensitivity;
    };

    /**
     * Get the staff
     *
     * @method getStaff
     * @returns {MusicStaff}
     */
    MusicParameter.prototype.getStaff = function () {
        return this.staff;
    };

    /**
     * Set the staff
     *
     * @method setStaff
     * @param {MusicStaff} staff
     */
    MusicParameter.prototype.setStaff = function (staff) {
        this.staff = staff;
    };

    /**
     * Get the number of divisions
     *
     * @method getDivisions
     * @returns {Number}
     */
    MusicParameter.prototype.getDivisions = function () {
        return this.divisions;
    };

    /**
     * Set the number of divisions
     *
     * @method setDivisions
     * @param {Number} divisions
     */
    MusicParameter.prototype.setDivisions = function (divisions) {
        this.divisions = divisions;
    };

    // Export
    scope.MusicParameter = MusicParameter;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition input object for music recognition
     *
     * @class MusicRecognitionInput
     * @extends AbstractRecognitionInput
     * @constructor
     */
    function MusicRecognitionInput() {
    }

    /**
     * Inheritance property
     */
    MusicRecognitionInput.prototype = new scope.AbstractRecognitionInput();

    /**
     * Constructor property
     */
    MusicRecognitionInput.prototype.constructor = MusicRecognitionInput;

    /**
     * Get input components
     *
     * @method getComponents
     * @returns {AbstractComponent[]}
     */
    MusicRecognitionInput.prototype.getComponents = function () {
        return this.components;
    };

    /**
     * Set input components
     *
     * @method setComponents
     * @param {AbstractComponent[]} components
     */
    MusicRecognitionInput.prototype.setComponents = function (components) {
        this.components = components;
    };

    /**
     * Get the result types
     *
     * @method getResultTypes
     * @returns {Array}
     */
    MusicRecognitionInput.prototype.getResultTypes = function () {
        return this.resultTypes;
    };

    /**
     * Set the result types
     *
     * @method setResultTypes
     * @param {Array} resultTypes
     */
    MusicRecognitionInput.prototype.setResultTypes = function (resultTypes) {
        this.resultTypes = resultTypes;
    };

    /**
     * Get the user resources
     *
     * @method getUserResources
     * @returns {Array}
     */
    MusicRecognitionInput.prototype.getUserResources = function () {
        return this.userResources;
    };

    /**
     * Set the user resources
     *
     * @method setUserResources
     * @param {Array} userResources
     */
    MusicRecognitionInput.prototype.setUserResources = function (userResources) {
        this.userResources = userResources;
    };

    /**
     * Get the sensitivity of the scratch-out detection
     *
     * @method getScratchOutDetectionSensitivity
     * @returns {Number}
     */
    MusicRecognitionInput.prototype.getScratchOutDetectionSensitivity = function () {
        return this.scratchOutDetectionSensitivity;
    };

    /**
     * Set the sensitivity of the scratch-out detection
     *
     * @method setScratchOutDetectionSensitivity
     * @param {Number} scratchOutDetectionSensitivity
     */
    MusicRecognitionInput.prototype.setScratchOutDetectionSensitivity = function (scratchOutDetectionSensitivity) {
        this.scratchOutDetectionSensitivity = scratchOutDetectionSensitivity;
    };

    /**
     * Get the staff
     *
     * @method getStaff
     * @returns {MusicStaff}
     */
    MusicRecognitionInput.prototype.getStaff = function () {
        return this.staff;
    };

    /**
     * Set the staff
     *
     * @method setStaff
     * @param {MusicStaff} staff
     */
    MusicRecognitionInput.prototype.setStaff = function (staff) {
        this.staff = staff;
    };

    /**
     * Get the number of divisions
     *
     * @method getDivisions
     * @returns {Number}
     */
    MusicRecognitionInput.prototype.getDivisions = function () {
        return this.divisions;
    };

    /**
     * Set the number of divisions
     *
     * @method setDivisions
     * @param {Number} divisions
     */
    MusicRecognitionInput.prototype.setDivisions = function (divisions) {
        this.divisions = divisions;
    };

    // Export
    scope.MusicRecognitionInput = MusicRecognitionInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition data for music input
     *
     * @class MusicRecognitionData
     * @extends AbstractRecognitionData
     * @constructor
     */
    function MusicRecognitionData() {
    }

    /**
     * Inheritance property
     */
    MusicRecognitionData.prototype = new scope.AbstractRecognitionData();

    /**
     * Constructor property
     */
    MusicRecognitionData.prototype.constructor = MusicRecognitionData;

    /**
     * Get music input
     *
     * @method getMusicRecognitionInput
     * @returns {MusicRecognitionInput}
     */
    MusicRecognitionData.prototype.getMusicRecognitionInput = function () {
        return this.musicInput;
    };

    /**
     * Set music input
     *
     * @method setMusicRecognitionInput
     * @param {MusicRecognitionInput} input
     */
    MusicRecognitionData.prototype.setMusicRecognitionInput = function (input) {
        this.musicInput = JSON.stringify(input);
    };

    // Export
    scope.MusicRecognitionData = MusicRecognitionData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Parameters used for analyzer recognition
     *
     * @class AnalyzerParameter
     * @extends AbstractParameter
     * @constructor
     */
    function AnalyzerParameter(obj) {
        scope.AbstractParameter.call(this, obj);
        this.textParameter = new scope.TextParameter();
        this.textParameter.setLanguage('en_US');
        this.textParameter.setInputMode('CURSIVE');
    }

    /**
     * Inheritance property
     */
    AnalyzerParameter.prototype = new scope.AbstractParameter();

    /**
     * Constructor property
     */
    AnalyzerParameter.prototype.constructor = AnalyzerParameter;

    /**
     * Get text recognition parameters
     *
     * @method getTextParameters
     * @returns {TextParameter}
     */
    AnalyzerParameter.prototype.getTextParameters = function () {
        return this.textParameter;
    };

    /**
     * Set text recognition parameters
     *
     * @method setTextParameters
     * @param {TextParameter} parameters
     */
    AnalyzerParameter.prototype.setTextParameters = function (parameters) {
        this.textParameter = parameters;
    };

    /**
     * Get analyzer coordinate resolution
     *
     * @method getCoordinateResolution
     * @returns {Number}
     */
    AnalyzerParameter.prototype.getCoordinateResolution = function () {
        return this.coordinateResolution;
    };

    /**
     * Set analyzer coordinate resolution
     *
     * @method setCoordinateResolution
     * @param {Number} coordinateResolution
     */
    AnalyzerParameter.prototype.setCoordinateResolution = function (coordinateResolution) {
        this.coordinateResolution = coordinateResolution;
    };

    // Export
    scope.AnalyzerParameter = AnalyzerParameter;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition input object for analyzer recognition
     *
     * @class AnalyzerRecognitionInput
     * @extends AbstractRecognitionInput
     * @constructor
     */
    function AnalyzerRecognitionInput() {

    }

    /**
     * Inheritance property
     */
    AnalyzerRecognitionInput.prototype = new scope.AbstractRecognitionInput();

    /**
     * Constructor property
     */
    AnalyzerRecognitionInput.prototype.constructor = AnalyzerRecognitionInput;

    /**
     * Get analyzer recognition parameters
     *
     * @method getParameters
     * @returns {AnalyzerParameter}
     */
    AnalyzerRecognitionInput.prototype.getParameters = function () {
        return this.parameter;
    };

    /**
     * Set analyzer recognition parameters
     *
     * @method setParameters
     * @param {AnalyzerParameter} parameters
     */
    AnalyzerRecognitionInput.prototype.setParameters = function (parameters) {
        this.parameter = parameters;
    };

    /**
     * Get input components
     *
     * @method getComponents
     * @returns {AbstractComponent[]}
     */
    AnalyzerRecognitionInput.prototype.getComponents = function () {
        return this.components;
    };

    /**
     * Set input components
     *
     * @method setComponents
     * @param {AbstractComponent[]} components
     */
    AnalyzerRecognitionInput.prototype.setComponents = function (components) {
        this.components = components;
    };

    // Export
    scope.AnalyzerRecognitionInput = AnalyzerRecognitionInput;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Recognition data for analyzer input
     *
     * @class AnalyzerRecognitionData
     * @extends AbstractRecognitionData
     * @constructor
     */
    function AnalyzerRecognitionData() {
    }

    /**
     * Inheritance property
     */
    AnalyzerRecognitionData.prototype = new scope.AbstractRecognitionData();

    /**
     * Constructor property
     */
    AnalyzerRecognitionData.prototype.constructor = AnalyzerRecognitionData;

    /**
     * Get analyzer input
     *
     * @method getAnalyzerRecognitionInput
     * @returns {AnalyzerRecognitionInput}
     */
    AnalyzerRecognitionData.prototype.getAnalyzerRecognitionInput = function () {
        return this.analyzerInput;
    };

    /**
     * Set analyzer input
     *
     * @method setAnalyzerRecognitionInput
     * @param {AnalyzerRecognitionInput} input
     */
    AnalyzerRecognitionData.prototype.setAnalyzerRecognitionInput = function (input) {
        this.analyzerInput = JSON.stringify(input);
    };

    // Export
    scope.AnalyzerRecognitionData = AnalyzerRecognitionData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract result
     *
     * @class AbstractResult
     * @param {Object} [obj]
     * @constructor
     */
    function AbstractResult(obj) {
        if (obj) {
            this.instanceId = obj.instanceId;
        }
    }

    /**
     * Get instance id
     *
     * @method getInstanceId
     * @returns {String}
     */
    AbstractResult.prototype.getInstanceId = function () {
        return this.instanceId;
    };

    // Export
    scope.AbstractResult = AbstractResult;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition text result message
     *
     * @class AbstractRecoResponseWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function AbstractRecoResponseWSMessage(obj) {
        scope.AbstractWSMessage.call(this, obj);
        if (obj) {
            this.instanceId = obj.instanceId;
        }
    }

    /**
     * Inheritance property
     */
    AbstractRecoResponseWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    AbstractRecoResponseWSMessage.prototype.constructor = AbstractRecoResponseWSMessage;

    /**
     * Get instance id
     *
     * @method getInstanceId
     * @returns {String}
     */
    AbstractRecoResponseWSMessage.prototype.getInstanceId = function () {
        return this.instanceId;
    };

    // Export
    scope.AbstractRecoResponseWSMessage = AbstractRecoResponseWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition hmac challenge message
     *
     * @class ChallengeResponseWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function ChallengeResponseWSMessage(obj) {
        scope.AbstractWSMessage.call(this, obj);
        if (obj) {
            this.challenge = obj.challenge;
        }
    }

    /**
     * Inheritance property
     */
    ChallengeResponseWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    ChallengeResponseWSMessage.prototype.constructor = ChallengeResponseWSMessage;

    /**
     * Get the challenge
     *
     * @method getChallenge
     * @returns {String}
     */
    ChallengeResponseWSMessage.prototype.getChallenge = function () {
        return this.challenge;
    };

    // Export
    scope.ChallengeResponseWSMessage = ChallengeResponseWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition error message
     *
     * @class ErrorResponseWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function ErrorResponseWSMessage(obj) {
        scope.AbstractWSMessage.call(this, obj);
        if (obj) {
            this.error = obj.error;
        }
    }

    /**
     * Inheritance property
     */
    ErrorResponseWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    ErrorResponseWSMessage.prototype.constructor = ErrorResponseWSMessage;

    /**
     * Get the error
     *
     * @method getError
     * @returns {String}
     */
    ErrorResponseWSMessage.prototype.getError = function () {
        return this.error;
    };

    // Export
    scope.ErrorResponseWSMessage = ErrorResponseWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition init message
     *
     * @class InitResponseWSMessage
     * @extends AbstractWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function InitResponseWSMessage(obj) {
        scope.AbstractWSMessage.call(this, obj);
    }

    /**
     * Inheritance property
     */
    InitResponseWSMessage.prototype = new scope.AbstractWSMessage();

    /**
     * Constructor property
     */
    InitResponseWSMessage.prototype.constructor = InitResponseWSMessage;

    // Export
    scope.InitResponseWSMessage = InitResponseWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text ink ranges
     *
     * @class TextInkRange
     * @param {Object} [obj]
     * @constructor
     */
    function TextInkRange(obj) {
        if (obj) {
            var cpt = obj.split(/[:-]+/);
            this.startUnit = Number(cpt[0]);
            this.startComponent = Number(cpt[1]);
            this.startPoint = Number(cpt[2]);
            this.endUnit = Number(cpt[3]);
            this.endComponent = Number(cpt[4]);
            this.endPoint = Number(cpt[5]);
        }
    }

    /**
     * Get start unit
     *
     * @method getStartUnit
     * @returns {Number}
     */
    TextInkRange.prototype.getStartUnit = function () {
        return this.startUnit;
    };

    /**
     * Get end unit
     *
     * @method getEndUnit
     * @returns {Number}
     */
    TextInkRange.prototype.getEndUnit = function () {
        return this.endUnit;
    };

    /**
     * Get start component
     *
     * @method getStartComponent
     * @returns {Number}
     */
    TextInkRange.prototype.getStartComponent = function () {
        return this.startComponent;
    };

    /**
     * Get end component
     *
     * @method getEndComponent
     * @returns {Number}
     */
    TextInkRange.prototype.getEndComponent = function () {
        return this.endComponent;
    };

    /**
     * Get start point
     *
     * @method getStartPoint
     * @returns {Number}
     */
    TextInkRange.prototype.getStartPoint = function () {
        return this.startPoint;
    };

    /**
     * Get end point
     *
     * @method getEndPoint
     * @returns {Number}
     */
    TextInkRange.prototype.getEndPoint = function () {
        return this.endPoint;
    };

    // Export
    scope.TextInkRange = TextInkRange;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text candidate
     *
     * @class TextCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function TextCandidate(obj) {
        this.flags = [];
        if (obj) {
            this.label = obj.label;
            this.normalizedScore = obj.normalizedScore;
            this.spellingDistortionRatio = obj.spellingDistortionRatio;
            for (var j in obj.flags) {
                this.flags.push(obj.flags[j]);
            }
        }
    }

    /**
     * Get label
     *
     * @method getLabel
     * @returns {String}
     */
    TextCandidate.prototype.getLabel = function () {
        return this.label;
    };

    /**
     * Get normalized score
     *
     * @method getNormalizedScore
     * @returns {Number}
     */
    TextCandidate.prototype.getNormalizedScore = function () {
        return this.normalizedScore;
    };

    /**
     * Get resemblance score
     *
     * @method getResemblanceScore
     * @returns {Number}
     */
    TextCandidate.prototype.getResemblanceScore = function () {
        return this.resemblanceScore;
    };

    /**
     * Get spelling distortion ratio
     *
     * @method getSpellingDistortionRatio
     * @returns {Number}
     */
    TextCandidate.prototype.getSpellingDistortionRatio = function () {
        return this.spellingDistortionRatio;
    };

    /**
     * Get flags
     *
     * @method getFlags
     * @returns {Array}
     */
    TextCandidate.prototype.getFlags = function () {
        return this.flags;
    };

    // Export
    scope.TextCandidate = TextCandidate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text segment
     *
     * @class TextCharCandidate
     * @extends TextCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function TextCharCandidate(obj) {
        scope.TextCandidate.call(this, obj);
    }

    /**
     * Inheritance property
     */
    TextCharCandidate.prototype = new scope.TextCandidate();

    /**
     * Constructor property
     */
    TextCharCandidate.prototype.constructor = TextCharCandidate;

    // Export
    scope.TextCharCandidate = TextCharCandidate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text segment
     *
     * @class TextWordCandidate
     * @extends TextCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function TextWordCandidate(obj) {
        scope.TextCandidate.call(this, obj);
        this.children = [];
        if (obj) {
            for (var i in obj.children) {
                this.children.push(new scope.TextCharSegment(obj.children[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    TextWordCandidate.prototype = new scope.TextCandidate();

    /**
     * Constructor property
     */
    TextWordCandidate.prototype.constructor = TextWordCandidate;

    /**
     * Get children
     *
     * @method getChildren
     * @returns {TextCharSegment[]}
     */
    TextWordCandidate.prototype.getChildren = function () {
        return this.children;
    };

    // Export
    scope.TextWordCandidate = TextWordCandidate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text segment
     *
     * @class TextResultCandidate
     * @extends TextCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function TextResultCandidate(obj) {
        scope.TextCandidate.call(this, obj);
        this.children = [];
        if (obj) {
            for (var i in obj.children) {
                this.children.push(new scope.TextWordSegment(obj.children[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    TextResultCandidate.prototype = new scope.TextCandidate();

    /**
     * Constructor property
     */
    TextResultCandidate.prototype.constructor = TextResultCandidate;

    /**
     * Get children
     *
     * @method getChildren
     * @returns {TextWordSegment[]}
     */
    TextResultCandidate.prototype.getChildren = function () {
        return this.children;
    };

    // Export
    scope.TextResultCandidate = TextResultCandidate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text document
     *
     * @class TextDocument
     * @param {Object} [obj]
     * @constructor
     */
    function TextDocument(obj) {
        this.tagItems = [];
        this.wordCandidates = [];
        this.charCandidates = [];
        if (obj) {
            if (obj.textSegmentResult) {
                this.textSegmentResult = new scope.TextResultSegment(obj.textSegmentResult);
            }
            for (var i in obj.tagItems) {
                this.tagItems.push(new scope.TextTagItem(obj.tagItems[i]));
            }
            for (var j in obj.wordCandidates) {
                this.wordCandidates.push(new scope.TextWordSegment(obj.wordCandidates[j]));
            }
            for (var k in obj.charCandidates) {
                this.charCandidates.push(new scope.TextCharSegment(obj.charCandidates[k]));
            }
        }
    }

    /**
     * Get tag items
     *
     * @method getTagItems
     * @returns {TextTagItem[]}
     */
    TextDocument.prototype.getTagItems = function () {
        return this.tagItems;
    };

    /**
     * Get word segments
     *
     * @method getWordSegments
     * @returns {TextWordSegment[]}
     */
    TextDocument.prototype.getWordSegments = function () {
        return this.wordCandidates;
    };

    /**
     * Get word segment
     *
     * @method getWordSegment
     * @param {TextInkRange[]} inkRanges
     * @returns {TextWordSegment}
     */
    TextDocument.prototype.getWordSegment = function (inkRanges) {
        for (var i = 0; i < this.getWordSegments().length; i++) {
            if (JSON.stringify(this.getWordSegments()[i].getInkRanges()) === JSON.stringify(inkRanges)) {
                return this.getWordSegments()[i];
            }
        }
        return undefined;
    };

    /**
     * Get char segments
     *
     * @method getCharSegments
     * @returns {TextCharSegment[]}
     */
    TextDocument.prototype.getCharSegments = function () {
        return this.charCandidates;
    };

    /**
     * Get char segment
     *
     * @method getCharSegment
     * @param {TextInkRange[]} inkRanges
     * @returns {TextCharSegment}
     */
    TextDocument.prototype.getCharSegment = function (inkRanges) {
        for (var i = 0; i < this.getCharSegments().length; i++) {
            if (JSON.stringify(this.getCharSegments()[i].getInkRanges()) === JSON.stringify(inkRanges)) {
                return this.getCharSegments()[i];
            }
        }
        return undefined;
    };

    /**
     * Get text segment
     *
     * @method getTextSegment
     * @returns {TextResultSegment}
     */
    TextDocument.prototype.getTextSegment = function () {
        return this.textSegmentResult;
    };

    // Export
    scope.TextDocument = TextDocument;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text result
     *
     * @class TextResult
     * @extends AbstractResult
     * @param {Object} [obj]
     * @constructor
     */
    function TextResult(obj) {
        scope.AbstractResult.call(this, obj);
        if (obj) {
            this.result = new scope.TextDocument(obj.result);
        }
    }

    /**
     * Inheritance property
     */
    TextResult.prototype = new scope.AbstractResult();

    /**
     * Constructor property
     */
    TextResult.prototype.constructor = TextResult;

    /**
     * Get text document
     *
     * @method getTextDocument
     * @returns {TextDocument}
     */
    TextResult.prototype.getTextDocument = function () {
        return this.result;
    };

    // Export
    scope.TextResult = TextResult;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text segment
     *
     * @class TextSegment
     * @param {Object} [obj]
     * @constructor
     */
    function TextSegment(obj) {
        this.candidates = [];
        this.inkRanges = [];
        if (obj) {
            this.selectedCandidateIdx = obj.selectedCandidateIdx;
            if (obj.inkRanges) {
                var ranges = obj.inkRanges.split(/[\s]+/);
                for (var j in ranges) {
                    this.inkRanges.push(new scope.TextInkRange(ranges[j]));
                }
            }
        }
    }

    /**
     * Get candidates
     *
     * @method getCandidates
     * @returns {TextCandidate[]}
     */
    TextSegment.prototype.getCandidates = function () {
        return this.candidates;
    };

    /**
     * Get selected candidate index
     *
     * @method getSelectedCandidateIdx
     * @returns {Number}
     */
    TextSegment.prototype.getSelectedCandidateIdx = function () {
        return this.selectedCandidateIdx;
    };

    /**
     * Get selected candidate
     *
     * @method getSelectedCandidate
     * @returns {TextCandidate}
     */
    TextSegment.prototype.getSelectedCandidate = function () {
        if (this.candidates && (this.selectedCandidateIdx !== undefined)) {
            return this.candidates[this.selectedCandidateIdx];
        }
        return undefined;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {TextInkRange[]}
     */
    TextSegment.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    // Export
    scope.TextSegment = TextSegment;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text segment
     *
     * @class TextCharSegment
     * @extends TextSegment
     * @param {Object} [obj]
     * @constructor
     */
    function TextCharSegment(obj) {
        scope.TextSegment.call(this, obj);
        if (obj) {
            for (var i in obj.candidates) {
                this.candidates.push(new scope.TextCharCandidate(obj.candidates[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    TextCharSegment.prototype = new scope.TextSegment();

    /**
     * Constructor property
     */
    TextCharSegment.prototype.constructor = TextCharSegment;

    // Export
    scope.TextCharSegment = TextCharSegment;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text segment
     *
     * @class TextWordSegment
     * @extends TextSegment
     * @param {Object} [obj]
     * @constructor
     */
    function TextWordSegment(obj) {
        scope.TextSegment.call(this, obj);
        if (obj) {
            for (var i in obj.candidates) {
                this.candidates.push(new scope.TextWordCandidate(obj.candidates[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    TextWordSegment.prototype = new scope.TextSegment();

    /**
     * Constructor property
     */
    TextWordSegment.prototype.constructor = TextWordSegment;

    // Export
    scope.TextWordSegment = TextWordSegment;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text segment
     *
     * @class TextResultSegment
     * @extends TextSegment
     * @param {Object} [obj]
     * @constructor
     */
    function TextResultSegment(obj) {
        scope.TextSegment.call(this, obj);
        if (obj) {
            for (var i in obj.candidates) {
                this.candidates.push(new scope.TextResultCandidate(obj.candidates[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    TextResultSegment.prototype = new scope.TextSegment();

    /**
     * Constructor property
     */
    TextResultSegment.prototype.constructor = TextResultSegment;

    // Export
    scope.TextResultSegment = TextResultSegment;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text tag item
     *
     * @class TextTagItem
     * @param {Object} [obj]
     * @constructor
     */
    function TextTagItem(obj) {
        this.inkRanges = [];
        if (obj) {
            this.tagType = obj.tagType;
            if (obj.inkRanges) {
                var ranges = obj.inkRanges.split(/[\s]+/);
                for (var i in ranges) {
                    this.inkRanges.push(new scope.TextInkRange(ranges[i]));
                }
            }
        }
    }

    /**
     * Get tag type
     *
     * @method getTagType
     * @returns {String}
     */
    TextTagItem.prototype.getTagType = function () {
        return this.tagType;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {TextInkRange[]}
     */
    TextTagItem.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    // Export
    scope.TextTagItem = TextTagItem;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * WebSocket recognition text result message
     *
     * @class TextResponseWSMessage
     * @extends AbstractRecoResponseWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function TextResponseWSMessage(obj) {
        scope.AbstractRecoResponseWSMessage.call(this, obj);
        if (obj) {
            this.result = new scope.TextDocument(obj.result);
        }
    }

    /**
     * Inheritance property
     */
    TextResponseWSMessage.prototype = new scope.AbstractRecoResponseWSMessage();

    /**
     * Constructor property
     */
    TextResponseWSMessage.prototype.constructor = TextResponseWSMessage;

    /**
     * Get text document
     *
     * @method getTextDocument
     * @returns {TextDocument}
     */
    TextResponseWSMessage.prototype.getTextDocument = function () {
        return this.result;
    };

    // Export
    scope.TextResponseWSMessage = TextResponseWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract shape primitive
     *
     * @class AbstractShapePrimitive
     * @param {Object} [obj]
     * @constructor
     */
    function AbstractShapePrimitive(obj) {
        if (obj) {
            this.type = obj.type;
            this.beginDecoration = obj.beginDecoration;
            this.beginTangentAngle = obj.beginTangentAngle;
            this.endDecoration = obj.endDecoration;
            this.endTangentAngle = obj.endTangentAngle;
        }
    }

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    AbstractShapePrimitive.prototype.getType = function () {
        return this.type;
    };

    /**
     * Is line
     *
     * @method isLine
     * @returns {Boolean}
     */
    AbstractShapePrimitive.prototype.isLine = function () {
        return this.type === 'line';
    };

    /**
     * Is ellipse
     *
     * @method isEllipse
     * @returns {Boolean}
     */
    AbstractShapePrimitive.prototype.isEllipse = function () {
        return this.type === 'ellipse';
    };

    /**
     * Has begin decoration
     *
     * @method hasBeginDecoration
     * @returns {Boolean}
     */
    AbstractShapePrimitive.prototype.hasBeginDecoration = function () {
        return typeof this.beginDecoration !== 'undefined';
    };

    /**
     * Has end decoration
     *
     * @method hasEndDecoration
     * @returns {Boolean}
     */
    AbstractShapePrimitive.prototype.hasEndDecoration = function () {
        return typeof this.endDecoration !== 'undefined';
    };

    /**
     * Get begin decoration
     *
     * @method getBeginDecoration
     * @returns {String}
     */
    AbstractShapePrimitive.prototype.getBeginDecoration = function () {
        return this.beginDecoration;
    };

    /**
     * Get end decoration
     *
     * @method getEndDecoration
     * @returns {String}
     */
    AbstractShapePrimitive.prototype.getEndDecoration = function () {
        return this.endDecoration;
    };

    /**
     * Get begin tangent angle
     *
     * @method getBeginTangentAngle
     * @returns {Number}
     */
    AbstractShapePrimitive.prototype.getBeginTangentAngle = function () {
        return this.beginTangentAngle;
    };

    /**
     * Get end tangent angle
     *
     * @method getEndTangentAngle
     * @returns {Number}
     */
    AbstractShapePrimitive.prototype.getEndTangentAngle = function () {
        return this.endTangentAngle;
    };

    // Export
    scope.AbstractShapePrimitive = AbstractShapePrimitive;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape candidate
     *
     * @class ShapeCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeCandidate(obj) {
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    ShapeCandidate.prototype.getType = function () {
        return this.type;
    };

    /**
     * Is erased
     *
     * @method isErased
     * @returns {Boolean}
     */
    ShapeCandidate.prototype.isErased = function () {
        return this.type === 'erased';
    };

    /**
     * Is scratch-out
     *
     * @method isScratchOut
     * @returns {Boolean}
     */
    ShapeCandidate.prototype.isScratchOut = function () {
        return this.type === 'scratchOut';
    };

    /**
     * Is not recognized
     *
     * @method isNotRecognized
     * @returns {Boolean}
     */
    ShapeCandidate.prototype.isNotRecognized = function () {
        return this.type === 'notRecognized';
    };

    /**
     * Is recognized
     *
     * @method isRecognized
     * @returns {Boolean}
     */
    ShapeCandidate.prototype.isRecognized = function () {
        return this.type === 'recognizedShape';
    };

    // Export
    scope.ShapeCandidate = ShapeCandidate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape document
     *
     * @class ShapeDocument
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeDocument(obj) {
        this.segments = [];
        if (obj) {
            for (var i in obj.segments) {
                this.segments.push(new scope.ShapeSegment(obj.segments[i]));
            }
        }
    }

    /**
     * Get segments
     *
     * @method getSegments
     * @returns {ShapeSegment[]}
     */
    ShapeDocument.prototype.getSegments = function () {
        return this.segments;
    };

    // Export
    scope.ShapeDocument = ShapeDocument;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape ellipse
     *
     * @class ShapeEllipse
     * @extends AbstractShapePrimitive
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeEllipse(obj) {
        scope.AbstractShapePrimitive.call(this, obj);
        if (obj) {
            this.center = new scope.Point(obj.center);
            this.minRadius = obj.minRadius;
            this.maxRadius = obj.maxRadius;
            this.orientation = obj.orientation;
            this.startAngle = obj.startAngle;
            this.sweepAngle = obj.sweepAngle;
        }
    }

    /**
     * Inheritance property
     */
    ShapeEllipse.prototype = new scope.AbstractShapePrimitive();

    /**
     * Constructor property
     */
    ShapeEllipse.prototype.constructor = ShapeEllipse;

    /**
     * Get center
     *
     * @method getCenter
     * @returns {Point}
     */
    ShapeEllipse.prototype.getCenter = function () {
        return this.center;
    };

    /**
     * Get min radius
     *
     * @method getMinRadius
     * @returns {Number}
     */
    ShapeEllipse.prototype.getMinRadius = function () {
        return this.minRadius;
    };

    /**
     * Get max radius
     *
     * @method getMaxRadius
     * @returns {Number}
     */
    ShapeEllipse.prototype.getMaxRadius = function () {
        return this.maxRadius;
    };

    /**
     * Get orientation
     *
     * @method getOrientation
     * @returns {String}
     */
    ShapeEllipse.prototype.getOrientation = function () {
        return this.orientation;
    };

    /**
     * Get start angle
     *
     * @method getStartAngle
     * @returns {Number}
     */
    ShapeEllipse.prototype.getStartAngle = function () {
        return this.startAngle;
    };

    /**
     * Get sweep angle
     *
     * @method getSweepAngle
     * @returns {Number}
     */
    ShapeEllipse.prototype.getSweepAngle = function () {
        return this.sweepAngle;
    };

    // Export
    scope.ShapeEllipse = ShapeEllipse;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape erased
     *
     * @class ShapeErased
     * @extends ShapeCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeErased(obj) {
        scope.ShapeCandidate.call(this, obj);
    }

    /**
     * Inheritance property
     */
    ShapeErased.prototype = new scope.ShapeCandidate();

    /**
     * Constructor property
     */
    ShapeErased.prototype.constructor = ShapeErased;

    // Export
    scope.ShapeErased = ShapeErased;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape ink range
     *
     * @class ShapeInkRange
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeInkRange(obj) {
        if (obj) {
            this.firstStroke = obj.firstStroke;
            this.lastStroke = obj.lastStroke;
            this.firstPoint = obj.firstPoint;
            this.lastPoint = obj.lastPoint;
        }
    }

    /**
     * Get first stroke
     *
     * @method getFirstStroke
     * @returns {Number}
     */
    ShapeInkRange.prototype.getFirstStroke = function () {
        return this.firstStroke;
    };

    /**
     * Get last stroke
     *
     * @method getLastStroke
     * @returns {Number}
     */
    ShapeInkRange.prototype.getLastStroke = function () {
        return this.lastStroke;
    };

    /**
     * Get first point
     *
     * @method getFirstPoint
     * @returns {Number}
     */
    ShapeInkRange.prototype.getFirstPoint = function () {
        return this.firstPoint;
    };

    /**
     * Get last point
     *
     * @method getLastPoint
     * @returns {Number}
     */
    ShapeInkRange.prototype.getLastPoint = function () {
        return this.lastPoint;
    };

    // Export
    scope.ShapeInkRange = ShapeInkRange;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape line
     *
     * @class ShapeLine
     * @extends AbstractShapePrimitive
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeLine(obj) {
        scope.AbstractShapePrimitive.call(this, obj);
        if (obj) {
            this.firstPoint = new scope.Point(obj.firstPoint);
            this.lastPoint = new scope.Point(obj.lastPoint);
        }
    }

    /**
     * Inheritance property
     */
    ShapeLine.prototype = new scope.AbstractShapePrimitive();

    /**
     * Constructor property
     */
    ShapeLine.prototype.constructor = ShapeLine;

    /**
     * Get first point
     *
     * @method getFirstPoint
     * @returns {Point}
     */
    ShapeLine.prototype.getFirstPoint = function () {
        return this.firstPoint;
    };

    /**
     * Get last point
     *
     * @method getLastPoint
     * @returns {Point}
     */
    ShapeLine.prototype.getLastPoint = function () {
        return this.lastPoint;
    };

    // Export
    scope.ShapeLine = ShapeLine;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape not recognized
     *
     * @class ShapeNotRecognized
     * @extends ShapeCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeNotRecognized(obj) {
        scope.ShapeCandidate.call(this, obj);
    }

    /**
     * Inheritance property
     */
    ShapeNotRecognized.prototype = new scope.ShapeCandidate();

    /**
     * Constructor property
     */
    ShapeNotRecognized.prototype.constructor = ShapeNotRecognized;

    // Export
    scope.ShapeNotRecognized = ShapeNotRecognized;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape recognized
     *
     * @class ShapeRecognized
     * @extends ShapeCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeRecognized(obj) {
        scope.ShapeCandidate.call(this, obj);
        this.primitives = [];
        if (obj) {
            this.label = obj.label;
            this.normalizedRecognitionScore = obj.normalizedRecognitionScore;
            this.resemblanceScore = obj.resemblanceScore;
            for (var i in obj.primitives) {
                switch (obj.primitives[i].type) {
                    case 'line':
                        this.primitives.push(new scope.ShapeLine(obj.primitives[i]));
                        break;
                    case 'ellipse':
                        this.primitives.push(new scope.ShapeEllipse(obj.primitives[i]));
                        break;
                    default:
                        throw new Error('Unknown shape primitive');
                }
            }
        }
    }

    /**
     * Inheritance property
     */
    ShapeRecognized.prototype = new scope.ShapeCandidate();

    /**
     * Constructor property
     */
    ShapeRecognized.prototype.constructor = ShapeRecognized;

    /**
     * Get primitives
     *
     * @method getPrimitives
     * @returns {AbstractShapePrimitive[]}
     */
    ShapeRecognized.prototype.getPrimitives = function () {
        return this.primitives;
    };

    /**
     * Get label
     *
     * @method getLabel
     * @returns {String}
     */
    ShapeRecognized.prototype.getLabel = function () {
        return this.label;
    };

    /**
     * Get normalized score
     *
     * @method getNormalizedRecognitionScore
     * @returns {Number}
     */
    ShapeRecognized.prototype.getNormalizedRecognitionScore = function () {
        return this.normalizedRecognitionScore;
    };

    /**
     * Get resemblance score
     *
     * @method getResemblanceScore
     * @returns {Number}
     */
    ShapeRecognized.prototype.getResemblanceScore = function () {
        return this.resemblanceScore;
    };

    // Export
    scope.ShapeRecognized = ShapeRecognized;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape result
     *
     * @class ShapeResult
     * @extends AbstractResult
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeResult(obj) {
        scope.AbstractResult.call(this, obj);
        if (obj) {
            this.result = new scope.ShapeDocument(obj.result);
        }
    }

    /**
     * Inheritance property
     */
    ShapeResult.prototype = new scope.AbstractResult();

    /**
     * Constructor property
     */
    ShapeResult.prototype.constructor = ShapeResult;

    /**
     * Get shape document
     *
     * @method getShapeDocument
     * @returns {ShapeDocument}
     */
    ShapeResult.prototype.getShapeDocument = function () {
        return this.result;
    };

    // Export
    scope.ShapeResult = ShapeResult;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape scratch-out
     *
     * @class ShapeScratchOut
     * @extends ShapeCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeScratchOut(obj) {
        scope.ShapeCandidate.call(this, obj);
        this.inkRanges = [];
        if (obj) {
            for (var j in obj.inkRanges) {
                this.inkRanges.push(new scope.ShapeInkRange(obj.inkRanges[j]));
            }
        }
    }

    /**
     * Inheritance property
     */
    ShapeScratchOut.prototype = new scope.ShapeCandidate();

    /**
     * Constructor property
     */
    ShapeScratchOut.prototype.constructor = ShapeScratchOut;

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {ShapeInkRange[]}
     */
    ShapeScratchOut.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    // Export
    scope.ShapeScratchOut = ShapeScratchOut;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape segment
     *
     * @class ShapeSegment
     * @param {Object} [obj]
     * @constructor
     */
    function ShapeSegment(obj) {
        this.inkRanges = [];
        this.candidates = [];
        if (obj) {
            this.elementType = obj.elementType;
            this.uniqueID = obj.uniqueID;
            this.selectedCandidateIndex = obj.selectedCandidateIndex;
            for (var i in obj.candidates) {
                switch (obj.candidates[i].type) {
                    case 'erased':
                        this.candidates.push(new scope.ShapeErased(obj.candidates[i]));
                        break;
                    case 'scratchOut':
                        this.candidates.push(new scope.ShapeScratchOut(obj.candidates[i]));
                        break;
                    case 'recognizedShape':
                        this.candidates.push(new scope.ShapeRecognized(obj.candidates[i]));
                        break;
                    default:
                        this.candidates.push(new scope.ShapeNotRecognized(obj.candidates[i]));
                        break;
                }
            }
            for (var j in obj.inkRanges) {
                this.inkRanges.push(new scope.ShapeInkRange(obj.inkRanges[j]));
            }
        }
    }

    /**
     * Get element type
     *
     * @method getElementType
     * @returns {String}
     */
    ShapeSegment.prototype.getElementType = function () {
        return this.elementType;
    };

    /**
     * Get unique id
     *
     * @method getUniqueId
     * @returns {String}
     */
    ShapeSegment.prototype.getUniqueId = function () {
        return this.uniqueID;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {ShapeInkRange[]}
     */
    ShapeSegment.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    /**
     * Get selected candidate index
     *
     * @method getSelectedCandidateIdx
     * @returns {Number}
     */
    ShapeSegment.prototype.getSelectedCandidateIdx = function () {
        return this.selectedCandidateIndex;
    };

    /**
     * Get candidates
     *
     * @method getCandidates
     * @returns {ShapeCandidate[]}
     */
    ShapeSegment.prototype.getCandidates = function () {
        return this.candidates;
    };

    /**
     * Get selected candidate
     *
     * @method getSelectedCandidate
     * @returns {ShapeCandidate}
     */
    ShapeSegment.prototype.getSelectedCandidate = function () {
        if (this.candidates && (this.selectedCandidateIndex !== undefined)) {
            return this.candidates[this.selectedCandidateIndex];
        }
        return undefined;
    };

    // Export
    scope.ShapeSegment = ShapeSegment;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math node
     *
     * @class MathNode
     * @param {Object} [obj]
     * @constructor
     */
    function MathNode(obj) {
        if (obj) {
            this.name = obj.name;
            this.type = obj.type;
        }
    }

    /**
     * Get name
     *
     * @method getName
     * @returns {String}
     */
    MathNode.prototype.getName = function () {
        return this.name;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MathNode.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MathNode = MathNode;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math non-terminal node
     *
     * @class MathNonTerminalNode
     * @extends MathNode
     * @param {Object} [obj]
     * @constructor
     */
    function MathNonTerminalNode(obj) {
        scope.MathNode.call(this, obj);
        this.candidates = [];
        if (obj) {
            this.selectedCandidate = obj.selectedCandidate;
            for (var i in obj.candidates) {
                switch (obj.candidates[i].type) {
                    case 'nonTerminalNode':
                        this.candidates.push(new scope.MathNonTerminalNode(obj.candidates[i]));
                        break;
                    case 'terminalNode':
                        this.candidates.push(new scope.MathTerminalNode(obj.candidates[i]));
                        break;
                    case 'rule':
                        this.candidates.push(new scope.MathRuleNode(obj.candidates[i]));
                        break;
                    case 'cell':
                        this.candidates.push(new scope.MathCellNonTerminalNode(obj.candidates[i]));
                        break;
                    case 'border':
                        this.candidates.push(new scope.MathBorderNonTerminalNode(obj.candidates[i]));
                        break;
                    case 'table':
                        this.candidates.push(new scope.MathTableRuleNode(obj.candidates[i]));
                        break;
                    default:
                        throw new Error('Unknown math node type: ' + obj.candidates[i].type);
                }
            }
        }
    }

    /**
     * Inheritance property
     */
    MathNonTerminalNode.prototype = new scope.MathNode();

    /**
     * Constructor property
     */
    MathNonTerminalNode.prototype.constructor = MathNonTerminalNode;

    /**
     * Get candidates
     *
     * @method getCandidates
     * @returns {MathNode[]}
     */
    MathNonTerminalNode.prototype.getCandidates = function () {
        return this.candidates;
    };

    /**
     * Get selected candidate index
     *
     * @method getSelectedCandidateIdx
     * @returns {Number}
     */
    MathNonTerminalNode.prototype.getSelectedCandidateIdx = function () {
        return this.selectedCandidate;
    };

    /**
     * Get selected candidate
     *
     * @method getSelectedCandidate
     * @returns {MathNode}
     */
    MathNonTerminalNode.prototype.getSelectedCandidate = function () {
        if (this.candidates && (this.selectedCandidate !== undefined)) {
            return this.candidates[this.selectedCandidate];
        }
        return undefined;
    };

    /**
     * Get bounding box
     *
     * @method getBoundingBox
     * @returns {Rectangle}
     */
    MathNonTerminalNode.prototype.getBoundingBox = function () {
        return this.getSelectedCandidate() ? this.getSelectedCandidate().getBoundingBox() : undefined;
    };

    // Export
    scope.MathNonTerminalNode = MathNonTerminalNode;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract math result
     *
     * @class MathResultElement
     * @param {Object} [obj]
     * @constructor
     */
    function MathResultElement(obj) {
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MathResultElement.prototype.getType = function () {
        return this.type;
    };

    /**
     * Is LaTeX result
     *
     * @method isLatex
     * @returns {Boolean}
     */
    MathResultElement.prototype.isLaTex = function () {
        return this.type === 'LATEX';
    };

    /**
     * Is MathML result
     *
     * @method isMathMl
     * @returns {Boolean}
     */
    MathResultElement.prototype.isMathMl = function () {
        return this.type === 'MATHML';
    };

    /**
     * Is SymbolTree result
     *
     * @method isSymbolTree
     * @returns {Boolean}
     */
    MathResultElement.prototype.isSymbolTree = function () {
        return this.type === 'SYMBOLTREE';
    };

    // Export
    scope.MathResultElement = MathResultElement;
})(MyScript);
(function (scope) {
    'use strict';
    /**
     * Math rule node
     *
     * @class MathRuleNode
     * @extends MathNode
     * @param {Object} [obj]
     * @constructor
     */
    function MathRuleNode(obj) {
        scope.MathNode.call(this, obj);
        this.children = [];
        if (obj) {
            this.name = obj.name;
            for (var i in obj.children) {
                switch (obj.children[i].type) {
                    case 'nonTerminalNode':
                        this.children.push(new scope.MathNonTerminalNode(obj.children[i]));
                        break;
                    case 'terminalNode':
                        this.children.push(new scope.MathTerminalNode(obj.children[i]));
                        break;
                    case 'rule':
                        this.children.push(new scope.MathRuleNode(obj.children[i]));
                        break;
                    case 'cell':
                        this.children.push(new scope.MathCellNonTerminalNode(obj.children[i]));
                        break;
                    case 'border':
                        this.children.push(new scope.MathBorderNonTerminalNode(obj.children[i]));
                        break;
                    case 'table':
                        this.children.push(new scope.MathTableRuleNode(obj.children[i]));
                        break;
                    default:
                        throw new Error('Unknown math node type: ' + obj.children[i].type);
                }
            }
        }
    }

    /**
     * Inheritance property
     */
    MathRuleNode.prototype = new scope.MathNode();

    /**
     * Constructor property
     */
    MathRuleNode.prototype.constructor = MathRuleNode;

    /**
     * Get name
     *
     * @method getName
     * @returns {String}
     */
    MathRuleNode.prototype.getName = function () {
        return this.name;
    };

    /**
     * Get children
     *
     * @method getChildren
     * @returns {MathNode[]}
     */
    MathRuleNode.prototype.getChildren = function () {
        return this.children;
    };

    // Export
    scope.MathRuleNode = MathRuleNode;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math document
     *
     * @class MathDocument
     * @param {Object} [obj]
     * @constructor
     */
    function MathDocument(obj) {
        this.results = [];
        this.scratchOutResults = [];
        if (obj) {
            for (var i in obj.results) {
                var result = obj.results[i];
                switch (result.type) {
                    case 'MATHML':
                        this.results.push(new scope.MathMathMLResultElement(result));
                        break;
                    case 'LATEX':
                        this.results.push(new scope.MathLaTexResultElement(result));
                        break;
                    case 'SYMBOLTREE':
                        this.results.push(new scope.MathSymbolTreeResultElement(result));
                        break;
                    default:
                        throw new Error('Unknown math result type: ' + result.type);
                }
            }
            for (var j in obj.scratchOutResults) {
                this.scratchOutResults.push(new scope.MathScratchOut(obj.scratchOutResults[j]));
            }
        }
    }

    /**
     * Get result elements
     *
     * @method getResultElements
     * @returns {MathResultElement[]}
     */
    MathDocument.prototype.getResultElements = function () {
        return this.results;
    };

    /**
     * Get scratch-out results
     *
     * @method getScratchOutResults
     * @returns {MathScratchOut[]}
     */
    MathDocument.prototype.getScratchOutResults = function () {
        return this.scratchOutResults;
    };

    // Export
    scope.MathDocument = MathDocument;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math ink range
     *
     * @class MathInkRange
     * @param {Object} [obj]
     * @constructor
     */
    function MathInkRange(obj) {
        if (obj) {
            this.component = obj.component;
            this.firstItem = obj.firstItem;
            this.lastItem = obj.lastItem;
        }
    }

    /**
     * Get component
     *
     * @method getComponent
     * @returns {Number}
     */
    MathInkRange.prototype.getComponent = function () {
        return this.component;
    };

    /**
     * Get first item
     *
     * @method getFirstItem
     * @returns {Number}
     */
    MathInkRange.prototype.getFirstItem = function () {
        return this.firstItem;
    };

    /**
     * Get last item
     *
     * @method getLastItem
     * @returns {Number}
     */
    MathInkRange.prototype.getLastItem = function () {
        return this.lastItem;
    };

    // Export
    scope.MathInkRange = MathInkRange;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * LaTex result element
     *
     * @class MathLaTexResultElement
     * @extends MathResultElement
     * @param {Object} [obj]
     * @constructor
     */
    function MathLaTexResultElement(obj) {
        scope.MathResultElement.call(this, obj);
        if (obj) {
            this.value = obj.value;
        }
    }

    /**
     * Inheritance property
     */
    MathLaTexResultElement.prototype = new scope.MathResultElement();

    /**
     * Constructor property
     */
    MathLaTexResultElement.prototype.constructor = MathLaTexResultElement;

    /**
     * Get value
     *
     * @method getValue
     * @returns {String}
     */
    MathLaTexResultElement.prototype.getValue = function () {
        return this.value;
    };

    // Export
    scope.MathLaTexResultElement = MathLaTexResultElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * MathML result element
     *
     * @class MathMathMLResultElement
     * @extends MathResultElement
     * @param {Object} [obj]
     * @constructor
     */
    function MathMathMLResultElement(obj) {
        scope.MathResultElement.call(this, obj);
        if (obj) {
            this.value = obj.value;
        }
    }

    /**
     * Inheritance property
     */
    MathMathMLResultElement.prototype = new scope.MathResultElement();

    /**
     * Constructor property
     */
    MathMathMLResultElement.prototype.constructor = MathMathMLResultElement;

    /**
     * Get value
     *
     * @method getValue
     * @returns {String}
     */
    MathMathMLResultElement.prototype.getValue = function () {
        return this.value;
    };

    // Export
    scope.MathMathMLResultElement = MathMathMLResultElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math result
     *
     * @class MathResult
     * @extends AbstractResult
     * @param {Object} [obj]
     * @constructor
     */
    function MathResult(obj) {
        scope.AbstractResult.call(this, obj);
        if (obj) {
            this.result = new scope.MathDocument(obj.result);
        }
    }

    /**
     * Inheritance property
     */
    MathResult.prototype = new scope.AbstractResult();

    /**
     * Constructor property
     */
    MathResult.prototype.constructor = MathResult;

    /**
     * Get math document
     *
     * @method getMathDocument
     * @returns {MathDocument}
     */
    MathResult.prototype.getMathDocument = function () {
        return this.result;
    };

    // Export
    scope.MathResult = MathResult;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math scratch-out
     *
     * @class MathScratchOut
     * @param {Object} [obj]
     * @constructor
     */
    function MathScratchOut(obj) {
        this.inkRanges = [];
        this.erasedInkRanges = [];
        if (obj) {
            for (var i in obj.inkRanges) {
                this.inkRanges.push(new scope.MathInkRange(obj.inkRanges[i]));
            }
            for (var j in obj.erasedInkRanges) {
                this.erasedInkRanges.push(new scope.MathInkRange(obj.erasedInkRanges[j]));
            }
        }
    }

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {MathInkRange[]}
     */
    MathScratchOut.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    /**
     * Get erased ink ranges
     *
     * @method getErasedInkRanges
     * @returns {MathInkRange[]}
     */
    MathScratchOut.prototype.getErasedInkRanges = function () {
        return this.erasedInkRanges;
    };

    // Export
    scope.MathScratchOut = MathScratchOut;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math symbol tree
     *
     * @class MathSymbolTreeResultElement
     * @extends MathResultElement
     * @param {Object} [obj]
     * @constructor
     */
    function MathSymbolTreeResultElement(obj) {
        scope.MathResultElement.call(this, obj);
        if (obj) {
            switch (obj.root.type) {
                case 'nonTerminalNode':
                    this.root = new scope.MathNonTerminalNode(obj.root);
                    break;
                case 'terminalNode':
                    this.root = new scope.MathTerminalNode(obj.root);
                    break;
                case 'rule':
                    this.root = new scope.MathRuleNode(obj.root);
                    break;
                case 'cell':
                    this.root = new scope.MathCellNonTerminalNode(obj.root);
                    break;
                case 'border':
                    this.root = new scope.MathBorderNonTerminalNode(obj.root);
                    break;
                case 'table':
                    this.root = new scope.MathTableRuleNode(obj.root);
                    break;
                default:
                    throw new Error('Unknown math node type: ' + obj.root.type);
            }
            this.value = JSON.stringify(obj.root, null, '  ');
        }
    }

    /**
     * Inheritance property
     */
    MathSymbolTreeResultElement.prototype = new scope.MathResultElement();

    /**
     * Constructor property
     */
    MathSymbolTreeResultElement.prototype.constructor = MathSymbolTreeResultElement;

    /**
     * Get tree root
     *
     * @method getRoot
     * @returns {MathNode}
     */
    MathSymbolTreeResultElement.prototype.getRoot = function () {
        return this.root;
    };

    // Export
    scope.MathSymbolTreeResultElement = MathSymbolTreeResultElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math terminal node
     *
     * @class MathTerminalNode
     * @extends MathNode
     * @param {Object} [obj]
     * @constructor
     */
    function MathTerminalNode(obj) {
        scope.MathNode.call(this, obj);
        this.candidates = [];
        this.inkRanges = [];
        if (obj) {
            this.selectedCandidate = obj.selectedCandidate;
            for (var i in obj.candidates) {
                this.candidates.push(new scope.MathTerminalNodeCandidate(obj.candidates[i]));
            }
            for (var j in obj.inkRanges) {
                this.inkRanges.push(new scope.MathInkRange(obj.inkRanges[j]));
            }
        }
    }

    /**
     * Inheritance property
     */
    MathTerminalNode.prototype = new scope.MathNode();

    /**
     * Constructor property
     */
    MathTerminalNode.prototype.constructor = MathTerminalNode;

    /**
     * Get candidates
     *
     * @method getCandidates
     * @returns {MathTerminalNodeCandidate[]}
     */
    MathTerminalNode.prototype.getCandidates = function () {
        return this.candidates;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {MathInkRange[]}
     */
    MathTerminalNode.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    /**
     * Get selected candidate index
     *
     * @method getSelectedCandidateIdx
     * @returns {Number}
     */
    MathTerminalNode.prototype.getSelectedCandidateIdx = function () {
        return this.selectedCandidate;
    };

    /**
     * Get selected candidate
     *
     * @method getSelectedCandidate
     * @returns {MathNode}
     */
    MathTerminalNode.prototype.getSelectedCandidate = function () {
        if (this.candidates && (this.selectedCandidate !== undefined)) {
            return this.candidates[this.selectedCandidate];
        }
        return undefined;
    };

    // Export
    scope.MathTerminalNode = MathTerminalNode;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math terminal node candidate
     *
     * @class MathTerminalNodeCandidate
     * @param {Object} [obj]
     * @constructor
     */
    function MathTerminalNodeCandidate(obj) {
        if (obj) {
            this.label = obj.label;
            this.normalizedRecognitionScore = obj.normalizedRecognitionScore;
        }
    }

    /**
     * Get label
     *
     * @method getLabel
     * @returns {String}
     */
    MathTerminalNodeCandidate.prototype.getLabel = function () {
        return this.label;
    };

    /**
     * Get score
     *
     * @method getNormalizedRecognitionScore
     * @returns {Number}
     */
    MathTerminalNodeCandidate.prototype.getNormalizedRecognitionScore = function () {
        return this.normalizedRecognitionScore;
    };

    // Export
    scope.MathTerminalNodeCandidate = MathTerminalNodeCandidate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math border data
     *
     * @class MathBorderData
     * @param {Object} [obj]
     * @constructor
     */
    function MathBorderData(obj) {
        if (obj) {
            this.position = obj.position;
            this.start = obj.start;
            this.stop = obj.stop;
            this.type = obj.type;
        }
    }

    /**
     * Get position
     *
     * @method getPosition
     * @returns {Number}
     */
    MathBorderData.prototype.getPosition = function () {
        return this.position;
    };

    /**
     * Get start
     *
     * @method getStart
     * @returns {Number}
     */
    MathBorderData.prototype.getStart = function () {
        return this.start;
    };

    /**
     * Get stop
     *
     * @method getStop
     * @returns {Number}
     */
    MathBorderData.prototype.getStop = function () {
        return this.stop;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MathBorderData.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MathBorderData = MathBorderData;
})(MyScript);

'use strict';

(function (scope) {
    /**
     * Math border non-terminal node
     *
     * @class MathBorderNonTerminalNode
     * @extends MathNonTerminalNode
     * @param {Object} [obj]
     * @constructor
     */
    function MathBorderNonTerminalNode(obj) {
        scope.MathNonTerminalNode.call(this, obj);
        if (obj) {
            this.data = new scope.MathBorderData(obj.data);
        }
    }

    /**
     * Inheritance property
     */
    MathBorderNonTerminalNode.prototype = new scope.MathNonTerminalNode();

    /**
     * Constructor property
     */
    MathBorderNonTerminalNode.prototype.constructor = MathBorderNonTerminalNode;

    /**
     * Get data
     *
     * @method getData
     * @returns {MathBorderData}
     */
    MathBorderNonTerminalNode.prototype.getData = function () {
        return this.data;
    };

    // Export
    scope.MathBorderNonTerminalNode = MathBorderNonTerminalNode;
})(MyScript);

'use strict';

(function (scope) {
    /**
     * Math cell data
     *
     * @class MathCellData
     * @param {Object} [obj]
     * @constructor
     */
    function MathCellData(obj) {
        if (obj) {
            this.columnStart = obj.columnStart;
            this.columnStop = obj.columnStop;
            this.rowStart = obj.rowStart;
            this.rowStop = obj.rowStop;
        }
    }

    /**
     * Get column start
     *
     * @method getColumnStart
     * @returns {Number}
     */
    MathCellData.prototype.getColumnStart = function () {
        return this.columnStart;
    };

    /**
     * Get column stop
     *
     * @method getColumnStop
     * @returns {Number}
     */
    MathCellData.prototype.getColumnStop = function () {
        return this.columnStop;
    };

    /**
     * Get row start
     *
     * @method getRowStart
     * @returns {Number}
     */
    MathCellData.prototype.getRowStart = function () {
        return this.rowStart;
    };

    /**
     * Get row stop
     *
     * @method getRowStop
     * @returns {Number}
     */
    MathCellData.prototype.getRowStop = function () {
        return this.rowStop;
    };

    // Export
    scope.MathCellData = MathCellData;
})(MyScript);

'use strict';

(function (scope) {
    /**
     * Math cell non-terminal node
     *
     * @class MathCellNonTerminalNode
     * @extends MathNonTerminalNode
     * @param {Object} [obj]
     * @constructor
     */
    function MathCellNonTerminalNode(obj) {
        scope.MathNonTerminalNode.call(this, obj);
        if (obj) {
            this.data = new scope.MathCellData(obj.data);
        }
    }

    /**
     * Inheritance property
     */
    MathCellNonTerminalNode.prototype = new scope.MathNonTerminalNode();

    /**
     * Constructor property
     */
    MathCellNonTerminalNode.prototype.constructor = MathCellNonTerminalNode;

    /**
     * Get data
     *
     * @method getData
     * @returns {MathCellData}
     */
    MathCellNonTerminalNode.prototype.getData = function () {
        return this.data;
    };

    // Export
    scope.MathCellNonTerminalNode = MathCellNonTerminalNode;
})(MyScript);

'use strict';

(function (scope) {
    /**
     * Math table data
     *
     * @class MathTableData
     * @param {Object} [obj]
     * @constructor
     */
    function MathTableData(obj) {
        if (obj) {
            this.columnCount = obj.columnCount;
            this.rowCount = obj.rowCount;
        }
    }

    /**
     * Get column count
     *
     * @method getColumnCount
     * @returns {Number}
     */
    MathTableData.prototype.getColumnCount = function () {
        return this.columnCount;
    };

    /**
     * Get row count
     *
     * @method getRowCount
     * @returns {Number}
     */
    MathTableData.prototype.getRowCount = function () {
        return this.rowCount;
    };

    // Export
    scope.MathTableData = MathTableData;
})(MyScript);

'use strict';

(function (scope) {
    /**
     * Math table rule node
     *
     * @class MathTableRuleNode
     * @extends MathRuleNode
     * @param {Object} [obj]
     * @constructor
     */
    function MathTableRuleNode(obj) {
        scope.MathRuleNode.call(this, obj);
        if (obj) {
            this.data = new scope.MathTableData(obj.data);
        }
    }

    /**
     * Inheritance property
     */
    MathTableRuleNode.prototype = new scope.MathRuleNode();

    /**
     * Constructor property
     */
    MathTableRuleNode.prototype.constructor = MathTableRuleNode;

    /**
     * Get data
     *
     * @method getData
     * @returns {MathTableData}
     */
    MathTableRuleNode.prototype.getData = function () {
        return this.data;
    };

    // Export
    scope.MathTableRuleNode = MathTableRuleNode;
})(MyScript);

'use strict';

(function (scope) {
    /**
     * WebSocket recognition math result message
     *
     * @class MathResponseWSMessage
     * @extends AbstractRecoResponseWSMessage
     * @param {Object} [obj] Recognition WebSocket message
     * @constructor
     */
    function MathResponseWSMessage(obj) {
        scope.AbstractRecoResponseWSMessage.call(this, obj);
        if (obj) {
            this.result = new scope.MathDocument(obj.result);
        }
    }

    /**
     * Inheritance property
     */
    MathResponseWSMessage.prototype = new scope.AbstractRecoResponseWSMessage();

    /**
     * Constructor property
     */
    MathResponseWSMessage.prototype.constructor = MathResponseWSMessage;

    /**
     * Get math document
     *
     * @method getMathDocument
     * @returns {MathDocument}
     */
    MathResponseWSMessage.prototype.getMathDocument = function () {
        return this.result;
    };

    // Export
    scope.MathResponseWSMessage = MathResponseWSMessage;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract music element
     *
     * @class MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicElement(obj) {
        this.inputRanges = [];
        if (obj) {
            this.elementType = obj.elementType;
            this.inputRanges = obj.inputRanges;
        }
    }

    /**
     * Get element type
     *
     * @method getElementType
     * @returns {String}
     */
    MusicElement.prototype.getElementType = function () {
        return this.elementType;
    };

    /**
     * Get input ranges
     *
     * @method getInputRanges
     * @returns {MusicInputRange[]}
     */
    MusicElement.prototype.getInputRanges = function () {
        return this.inputRanges;
    };

    // Export
    scope.MusicElement = MusicElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Abstract music result element
     *
     * @class MusicResultElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicResultElement(obj) {
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicResultElement.prototype.getType = function () {
        return this.type;
    };

    /**
     * Is MusicXML
     *
     * @method isMusicXML
     * @returns {Boolean}
     */
    MusicResultElement.prototype.isMusicXML = function () {
        return this.type === 'MUSICXML';
    };

    /**
     * Is ScoreTree
     *
     * @method isScoreTree
     * @returns {Boolean}
     */
    MusicResultElement.prototype.isScoreTree = function () {
        return this.type === 'SCORETREE';
    };

    // Export
    scope.MusicResultElement = MusicResultElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music accidental
     *
     * @class MusicAccidental
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicAccidental(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Inheritance property
     */
    MusicAccidental.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicAccidental.prototype.constructor = MusicAccidental;

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicAccidental.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MusicAccidental = MusicAccidental;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music annotation
     *
     * @class MusicAnnotation
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicAnnotation(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.label = obj.label;
        }
    }

    /**
     * Inheritance property
     */
    MusicAnnotation.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicAnnotation.prototype.constructor = MusicAnnotation;

    /**
     * Get label
     *
     * @method getLabel
     * @returns {String}
     */
    MusicAnnotation.prototype.getLabel = function () {
        return this.label;
    };

    // Export
    scope.MusicAnnotation = MusicAnnotation;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music arpeggiate
     *
     * @class MusicArpeggiate
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicArpeggiate(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Inheritance property
     */
    MusicArpeggiate.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicArpeggiate.prototype.constructor = MusicArpeggiate;

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicArpeggiate.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MusicArpeggiate = MusicArpeggiate;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music bar
     *
     * @class MusicBar
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicBar(obj) {
        scope.MusicElement.call(this, obj);
        this.decorations = [];
        if (obj) {
            this.repeatDirection = obj.repeatDirection;
            this.style = obj.style;
            for (var i in obj.decorations) {
                this.decorations.push(new scope.MusicDecoration(obj.decorations[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    MusicBar.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicBar.prototype.constructor = MusicBar;

    /**
     * Get repeat direction
     *
     * @method getRepeatDirection
     * @returns {String}
     */
    MusicBar.prototype.getRepeatDirection = function () {
        return this.repeatDirection;
    };

    /**
     * Get style
     *
     * @method getStyle
     * @returns {String}
     */
    MusicBar.prototype.getStyle = function () {
        return this.style;
    };

    /**
     * Get decorations
     *
     * @method getDecorations
     * @returns {MusicDecoration[]}
     */
    MusicBar.prototype.getDecorations = function () {
        return this.decorations;
    };

    // Export
    scope.MusicBar = MusicBar;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music beam
     *
     * @class MusicBeam
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicBeam(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.placement = obj.placement;
            this.leftCount = obj.leftCount;
            this.rightCount = obj.rightCount;
        }
    }

    /**
     * Inheritance property
     */
    MusicBeam.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicBeam.prototype.constructor = MusicBeam;

    /**
     * Get placement
     *
     * @method getPlacement
     * @returns {String}
     */
    MusicBeam.prototype.getPlacement = function () {
        return this.placement;
    };

    /**
     * Get left count
     *
     * @method getLeftCount
     * @returns {Number}
     */
    MusicBeam.prototype.getLeftCount = function () {
        return this.leftCount;
    };

    /**
     * Get right count
     *
     * @method getRightCount
     * @returns {Number}
     */
    MusicBeam.prototype.getRightCount = function () {
        return this.rightCount;
    };

    // Export
    scope.MusicBeam = MusicBeam;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music chord
     *
     * @class MusicChord
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicChord(obj) {
        scope.MusicElement.call(this, obj);
        this.decorations = [];
        this.notes = [];
        this.beamTypes = [];
        this.ledgerLines = [];
        this.startSlurs = [];
        this.stopSlurs = [];
        if (obj) {
            this.duration = obj.duration;
            this.arpeggiate = new scope.MusicArpeggiate(obj.arpeggiate);
            this.startBeam = new scope.MusicBeam(obj.startBeam);
            this.stopBeam = new scope.MusicBeam(obj.stopBeam);
            this.stem = new scope.MusicStem(obj.stem);
            for (var i in obj.decorations) {
                this.decorations.push(new scope.MusicDecoration(obj.decorations[i]));
            }
            for (var j in obj.notes) {
                this.notes.push(new scope.MusicNote(obj.notes[j]));
            }
            for (var k in obj.beamTypes) {
                this.beamTypes.push(obj.beamTypes[k]);
            }
            for (var l in obj.ledgerLines) {
                this.ledgerLines.push(new scope.MusicLedgerLine(obj.ledgerLines[l]));
            }
            for (var m in obj.startSlurs) {
                this.startSlurs.push(new scope.MusicSlur(obj.startSlurs[m]));
            }
            for (var n in obj.stopSlurs) {
                this.stopSlurs.push(new scope.MusicSlur(obj.stopSlurs[n]));
            }
        }
    }

    /**
     * Inheritance property
     */
    MusicChord.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicChord.prototype.constructor = MusicChord;

    /**
     * Get duration
     *
     * @method getDuration
     * @returns {Number}
     */
    MusicChord.prototype.getDuration = function () {
        return this.duration;
    };

    /**
     * Get arpeggiate
     *
     * @method getArpeggiate
     * @returns {MusicArpeggiate}
     */
    MusicChord.prototype.getArpeggiate = function () {
        return this.arpeggiate;
    };

    /**
     * Get start beam
     *
     * @method getStartBeam
     * @returns {MusicBeam}
     */
    MusicChord.prototype.getStartBeam = function () {
        return this.startBeam;
    };

    /**
     * Get stop beam
     *
     * @method getStopBeam
     * @returns {MusicBeam}
     */
    MusicChord.prototype.getStopBeam = function () {
        return this.stopBeam;
    };

    /**
     * Get stem
     *
     * @method getStem
     * @returns {MusicStem}
     */
    MusicChord.prototype.getStem = function () {
        return this.stem;
    };

    /**
     * Get decorations
     *
     * @method getDecorations
     * @returns {MusicDecoration[]}
     */
    MusicChord.prototype.getDecorations = function () {
        return this.decorations;
    };

    /**
     * Get notes
     *
     * @method getNotes
     * @returns {MusicNote[]}
     */
    MusicChord.prototype.getNotes = function () {
        return this.notes;
    };

    /**
     * Get beam types
     *
     * @method getBeamTypes
     * @returns {Array}
     */
    MusicChord.prototype.getBeamTypes = function () {
        return this.beamTypes;
    };

    /**
     * Get ledger lines
     *
     * @method getLedgerLines
     * @returns {MusicLedgerLine[]}
     */
    MusicChord.prototype.getLedgerLines = function () {
        return this.ledgerLines;
    };

    /**
     * Get start slurs
     *
     * @method getStartSlurs
     * @returns {MusicSlur[]}
     */
    MusicChord.prototype.getStartSlurs = function () {
        return this.startSlurs;
    };

    /**
     * Get stop slurs
     *
     * @method getStopSlurs
     * @returns {MusicSlur[]}
     */
    MusicChord.prototype.getStopSlurs = function () {
        return this.stopSlurs;
    };

    // Export
    scope.MusicChord = MusicChord;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music clef
     *
     * @class MusicClef
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicClef(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.line = obj.line;
            this.octave = obj.octave;
            this.symbol = obj.symbol;
        }
    }

    /**
     * Inheritance property
     */
    MusicClef.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicClef.prototype.constructor = MusicClef;

    /**
     * Get line
     *
     * @method getLine
     * @returns {Number}
     */
    MusicClef.prototype.getLine = function () {
        return this.line;
    };

    /**
     * Get octave
     *
     * @method getOctave
     * @returns {Number}
     */
    MusicClef.prototype.getOctave = function () {
        return this.octave;
    };

    /**
     * Get symbol
     *
     * @method getSymbol
     * @returns {String}
     */
    MusicClef.prototype.getSymbol = function () {
        return this.symbol;
    };

    // Export
    scope.MusicClef = MusicClef;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music decoration
     *
     * @class MusicDecoration
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicDecoration(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.symbol = obj.symbol;
            this.placement = obj.placement;
        }
    }

    /**
     * Inheritance property
     */
    MusicDecoration.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicDecoration.prototype.constructor = MusicDecoration;

    /**
     * Get symbol
     *
     * @method getSymbol
     * @returns {String}
     */
    MusicDecoration.prototype.getSymbol = function () {
        return this.symbol;
    };

    /**
     * Get placement
     *
     * @method getPlacement
     * @returns {String}
     */
    MusicDecoration.prototype.getPlacement = function () {
        return this.placement;
    };

    // Export
    scope.MusicDecoration = MusicDecoration;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music document
     *
     * @class MusicDocument
     * @param {Object} [obj]
     * @constructor
     */
    function MusicDocument(obj) {
        this.results = [];
        this.scratchOutResults = [];
        if (obj) {
            for (var i in obj.results) {
                switch (obj.results[i].type) {
                    case 'MUSICXML':
                        this.results.push(new scope.MusicXMLResultElement(obj.results[i]));
                        break;
                    default:
                        this.results.push(new scope.MusicScoreTreeResultElement(obj.results[i]));
                        break;
                }
            }
            for (var j in obj.scratchOutResults) {
                this.scratchOutResults.push(new scope.MusicScratchOut(obj.scratchOutResults[j]));
            }
        }
    }

    /**
     * Get result elements
     *
     * @method getResultElements
     * @returns {MusicResultElement[]}
     */
    MusicDocument.prototype.getResultElements = function () {
        return this.results;
    };

    /**
     * Get scratch-out results
     *
     * @method getScratchOutResults
     * @returns {MusicScratchOut[]}
     */
    MusicDocument.prototype.getScratchOutResults = function () {
        return this.scratchOutResults;
    };

    // Export
    scope.MusicDocument = MusicDocument;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music dots
     *
     * @class MusicDots
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicDots(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.count = obj.count;
        }
    }

    /**
     * Inheritance property
     */
    MusicDots.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicDots.prototype.constructor = MusicDots;

    /**
     * Get dots counts
     *
     * @method getCount
     * @returns {Number}
     */
    MusicDots.prototype.getCount = function () {
        return this.count;
    };

    // Export
    scope.MusicDots = MusicDots;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music head
     *
     * @class MusicHead
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicHead(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Inheritance property
     */
    MusicHead.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicHead.prototype.constructor = MusicHead;

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicHead.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MusicHead = MusicHead;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music input range
     *
     * @class MusicInputRange
     * @param {Object} [obj]
     * @constructor
     */
    function MusicInputRange(obj) {
        if (obj) {
            this.component = obj.component;
            this.firstItem = obj.firstItem;
            this.lastItem = obj.lastItem;
        }
    }

    /**
     * Get component
     *
     * @method getComponent
     * @returns {Number}
     */
    MusicInputRange.prototype.getComponent = function () {
        return this.component;
    };

    /**
     * Get first item
     *
     * @method getFirstItem
     * @returns {Number}
     */
    MusicInputRange.prototype.getFirstItem = function () {
        return this.firstItem;
    };

    /**
     * Get last item
     *
     * @method getLastItem
     * @returns {Number}
     */
    MusicInputRange.prototype.getLastItem = function () {
        return this.lastItem;
    };

    // Export
    scope.MusicInputRange = MusicInputRange;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music key signature
     *
     * @class MusicKeySignature
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicKeySignature(obj) {
        scope.MusicElement.call(this, obj);
        this.accidentals = [];
        if (obj) {
            this.signature = new scope.MusicKeySignatureData(obj.signature);
            for (var i in obj.accidentals) {
                this.accidentals.push(new scope.MusicAccidental(obj.accidentals[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    MusicKeySignature.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicKeySignature.prototype.constructor = MusicKeySignature;

    /**
     * Get signature
     *
     * @method getSignature
     * @returns {MusicKeySignatureData}
     */
    MusicKeySignature.prototype.getSignature = function () {
        return this.signature;
    };

    /**
     * Get accidentals
     *
     * @method getAccidentals
     * @returns {MusicAccidental[]}
     */
    MusicKeySignature.prototype.getAccidentals = function () {
        return this.accidentals;
    };

    // Export
    scope.MusicKeySignature = MusicKeySignature;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music key signature data
     *
     * @class MusicKeySignatureData
     * @param {Object} [obj]
     * @constructor
     */
    function MusicKeySignatureData(obj) {
        if (obj) {
            this.fifths = obj.fifths;
            this.cancel = obj.cancel;
        }
    }

    /**
     * Get fifths
     *
     * @method getFifths
     * @returns {Number}
     */
    MusicKeySignatureData.prototype.getFifths = function () {
        return this.fifths;
    };

    /**
     * Get cancel
     *
     * @method getCancel
     * @returns {Number}
     */
    MusicKeySignatureData.prototype.getCancel = function () {
        return this.cancel;
    };

    // Export
    scope.MusicKeySignatureData = MusicKeySignatureData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music ledger line
     *
     * @class MusicLedgerLine
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicLedgerLine(obj) {
        scope.MusicElement.call(this, obj);
    }

    /**
     * Inheritance property
     */
    MusicLedgerLine.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicLedgerLine.prototype.constructor = MusicLedgerLine;

    // Export
    scope.MusicLedgerLine = MusicLedgerLine;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music note
     *
     * @class MusicNote
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicNote(obj) {
        scope.MusicElement.call(this, obj);
        this.decorations = [];
        this.beamTypes = [];
        this.ledgerLines = [];
        this.startSlurs = [];
        this.stopSlurs = [];
        if (obj) {
            this.accidental = new scope.MusicAccidental(obj.accidental);
            this.dots = new scope.MusicDots(obj.dots);
            this.duration = obj.duration;
            this.head = new scope.MusicHead(obj.head);
            this.line = obj.line;
            this.pitch = new scope.MusicPitchData(obj.pitch);
            this.startBeam = new scope.MusicBeam(obj.startBeam);
            this.stopBeam = new scope.MusicBeam(obj.stopBeam);
            this.stem = new scope.MusicStem(obj.stem);
            this.startTie = new scope.MusicTie(obj.startTie);
            this.stopTie = new scope.MusicTie(obj.stopTie);
            this.startTuplet = new scope.MusicTuplet(obj.startTuplet);
            this.stopTuplet = new scope.MusicTuplet(obj.stopTuplet);
            this.timeModification = new scope.MusicTimeModificationData(obj.timeModification);
            this.type = obj.type;
            for (var i in obj.decorations) {
                this.decorations.push(new scope.MusicDecoration(obj.decorations[i]));
            }
            for (var j in obj.beamTypes) {
                this.beamTypes.push(obj.beamTypes[j]);
            }
            for (var k in obj.ledgerLines) {
                this.ledgerLines.push(new scope.MusicLedgerLine(obj.ledgerLines[k]));
            }
            for (var l in obj.startSlurs) {
                this.startSlurs.push(new scope.MusicSlur(obj.startSlurs[l]));
            }
            for (var m in obj.stopSlurs) {
                this.stopSlurs.push(new scope.MusicSlur(obj.stopSlurs[m]));
            }
        }
    }

    /**
     * Inheritance property
     */
    MusicNote.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicNote.prototype.constructor = MusicNote;

    /**
     * Get accidental
     *
     * @method getAccidental
     * @returns {MusicAccidental}
     */
    MusicNote.prototype.getAccidental = function () {
        return this.accidental;
    };

    /**
     * Get dots
     *
     * @method getDots
     * @returns {MusicDots}
     */
    MusicNote.prototype.getDots = function () {
        return this.dots;
    };

    /**
     * Get duration
     *
     * @method getDuration
     * @returns {Number}
     */
    MusicNote.prototype.getDuration = function () {
        return this.duration;
    };

    /**
     * Get head
     *
     * @method getHead
     * @returns {MusicHead}
     */
    MusicNote.prototype.getHead = function () {
        return this.head;
    };

    /**
     * Get line
     *
     * @method getLine
     * @returns {Number}
     */
    MusicNote.prototype.getLine = function () {
        return this.line;
    };

    /**
     * Get pitch
     *
     * @method getPitch
     * @returns {MusicPitchData}
     */
    MusicNote.prototype.getPitch = function () {
        return this.pitch;
    };

    /**
     * Get start beam
     *
     * @method getStartBeam
     * @returns {MusicBeam}
     */
    MusicNote.prototype.getStartBeam = function () {
        return this.startBeam;
    };

    /**
     * Get stop beam
     *
     * @method getStopBeam
     * @returns {MusicBeam}
     */
    MusicNote.prototype.getStopBeam = function () {
        return this.stopBeam;
    };

    /**
     * Get stem
     *
     * @method getStem
     * @returns {MusicStem}
     */
    MusicNote.prototype.getStem = function () {
        return this.stem;
    };

    /**
     * Get start tie
     *
     * @method getStartTie
     * @returns {MusicTie}
     */
    MusicNote.prototype.getStartTie = function () {
        return this.startTie;
    };

    /**
     * Get stop tie
     *
     * @method getStopTie
     * @returns {MusicTie}
     */
    MusicNote.prototype.getStopTie = function () {
        return this.stopTie;
    };

    /**
     * Get start tuplet
     *
     * @method getStartTuplet
     * @returns {MusicTuplet}
     */
    MusicNote.prototype.getStartTuplet = function () {
        return this.startTuplet;
    };

    /**
     * Get stop tuplet
     *
     * @method getStopTuplet
     * @returns {MusicTuplet}
     */
    MusicNote.prototype.getStopTuplet = function () {
        return this.stopTuplet;
    };

    /**
     * Get time modification
     *
     * @method getTimeModification
     * @returns {MusicTimeModificationData}
     */
    MusicNote.prototype.getTimeModification = function () {
        return this.timeModification;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicNote.prototype.getType = function () {
        return this.type;
    };

    /**
     * Get decorations
     *
     * @method getDecorations
     * @returns {MusicDecoration[]}
     */
    MusicNote.prototype.getDecorations = function () {
        return this.decorations;
    };

    /**
     * Get beam types
     *
     * @method getBeamTypes
     * @returns {Array}
     */
    MusicNote.prototype.getBeamTypes = function () {
        return this.beamTypes;
    };

    /**
     * Get ledger lines
     *
     * @method getLedgerLines
     * @returns {MusicLedgerLine[]}
     */
    MusicNote.prototype.getLedgerLines = function () {
        return this.ledgerLines;
    };

    /**
     * Get start slurs
     *
     * @method getStartSlurs
     * @returns {MusicSlur[]}
     */
    MusicNote.prototype.getStartSlurs = function () {
        return this.startSlurs;
    };

    /**
     * Get stop slurs
     *
     * @method getStopSlurs
     * @returns {MusicSlur[]}
     */
    MusicNote.prototype.getStopSlurs = function () {
        return this.stopSlurs;
    };

    // Export
    scope.MusicNote = MusicNote;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music part
     *
     * @class MusicPart
     * @param {Object} [obj]
     * @constructor
     */
    function MusicPart(obj) {
        this.elements = [];
        if (obj) {
            for (var i in obj.elements) {
                switch (obj.elements[i].elementType) {
                    case 'accidental':
                        this.elements.push(new scope.MusicAccidental(obj.elements[i]));
                        break;
                    case 'annotation':
                        this.elements.push(new scope.MusicAnnotation(obj.elements[i]));
                        break;
                    case 'arpeggiate':
                        this.elements.push(new scope.MusicArpeggiate(obj.elements[i]));
                        break;
                    case 'bar':
                        this.elements.push(new scope.MusicBar(obj.elements[i]));
                        break;
                    case 'beam':
                        this.elements.push(new scope.MusicBeam(obj.elements[i]));
                        break;
                    case 'chord':
                        this.elements.push(new scope.MusicChord(obj.elements[i]));
                        break;
                    case 'clef':
                        this.elements.push(new scope.MusicClef(obj.elements[i]));
                        break;
                    case 'decoration':
                        this.elements.push(new scope.MusicDecoration(obj.elements[i]));
                        break;
                    case 'dots':
                        this.elements.push(new scope.MusicDots(obj.elements[i]));
                        break;
                    case 'head':
                        this.elements.push(new scope.MusicHead(obj.elements[i]));
                        break;
                    case 'keySignature':
                        this.elements.push(new scope.MusicKeySignature(obj.elements[i]));
                        break;
                    case 'ledgerLine':
                        this.elements.push(new scope.MusicLedgerLine(obj.elements[i]));
                        break;
                    case 'note':
                        this.elements.push(new scope.MusicNote(obj.elements[i]));
                        break;
                    case 'rest':
                        this.elements.push(new scope.MusicRest(obj.elements[i]));
                        break;
                    case 'slur':
                        this.elements.push(new scope.MusicSlur(obj.elements[i]));
                        break;
                    case 'stem':
                        this.elements.push(new scope.MusicStem(obj.elements[i]));
                        break;
                    case 'tie':
                        this.elements.push(new scope.MusicTie(obj.elements[i]));
                        break;
                    case 'timeSignature':
                        this.elements.push(new scope.MusicTimeSignature(obj.elements[i]));
                        break;
                    case 'tuplet':
                        this.elements.push(new scope.MusicTuplet(obj.elements[i]));
                        break;
                    case 'tupletBracket':
                        this.elements.push(new scope.MusicTupletBracket(obj.elements[i]));
                        break;
                    default:
                        throw new Error('Unknown music element');
                }
            }
        }
    }

    /**
     * Get elements
     *
     * @method getElements
     * @returns {MusicElement[]}
     */
    MusicPart.prototype.getElements = function () {
        return this.elements;
    };

    // Export
    scope.MusicPart = MusicPart;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music pitch data
     *
     * @class MusicPitchData
     * @param {Object} [obj]
     * @constructor
     */
    function MusicPitchData(obj) {
        if (obj) {
            this.alteration = obj.alteration;
            this.octave = obj.octave;
            this.step = obj.step;
        }
    }

    /**
     * Get alteration
     *
     * @method getAlteration
     * @returns {Number}
     */
    MusicPitchData.prototype.getAlteration = function () {
        return this.alteration;
    };

    /**
     * Get octave
     *
     * @method getOctave
     * @returns {Number}
     */
    MusicPitchData.prototype.getOctave = function () {
        return this.octave;
    };

    /**
     * Get step
     *
     * @method getStep
     * @returns {String}
     */
    MusicPitchData.prototype.getStep = function () {
        return this.step;
    };

    // Export
    scope.MusicPitchData = MusicPitchData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music rest
     *
     * @class MusicRest
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicRest(obj) {
        scope.MusicElement.call(this, obj);
        this.decorations = [];
        this.startSlurs = [];
        this.stopSlurs = [];
        if (obj) {
            this.type = obj.type;
            this.dots = new scope.MusicDots(obj.dots);
            this.startTuplet = new scope.MusicTuplet(obj.startTuplet);
            this.stopTuplet = new scope.MusicTuplet(obj.stopTuplet);
            this.timeModification = new scope.MusicTimeModificationData(obj.timeModification);
            this.duration = obj.duration;
            for (var i in obj.decorations) {
                this.decorations.push(new scope.MusicDecoration(obj.decorations[i]));
            }
            for (var l in obj.startSlurs) {
                this.startSlurs.push(new scope.MusicSlur(obj.startSlurs[l]));
            }
            for (var m in obj.stopSlurs) {
                this.stopSlurs.push(new scope.MusicSlur(obj.stopSlurs[m]));
            }
        }
    }

    /**
     * Inheritance property
     */
    MusicRest.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicRest.prototype.constructor = MusicRest;

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicRest.prototype.getType = function () {
        return this.type;
    };

    /**
     * Get dots
     *
     * @method getDots
     * @returns {MusicDots}
     */
    MusicRest.prototype.getDots = function () {
        return this.dots;
    };

    /**
     * Get start tuplet
     *
     * @method getStartTuplet
     * @returns {MusicTuplet}
     */
    MusicRest.prototype.getStartTuplet = function () {
        return this.startTuplet;
    };

    /**
     * Get stop tuplet
     *
     * @method getStopTuplet
     * @returns {MusicTuplet}
     */
    MusicRest.prototype.getStopTuplet = function () {
        return this.stopTuplet;
    };

    /**
     * Get time modification
     *
     * @method getTimeModification
     * @returns {MusicTimeModificationData}
     */
    MusicRest.prototype.getTimeModification = function () {
        return this.timeModification;
    };

    /**
     * Get duration
     *
     * @method getDuration
     * @returns {Number}
     */
    MusicRest.prototype.getDuration = function () {
        return this.duration;
    };

    /**
     * Get decorations
     *
     * @method getDecorations
     * @returns {MusicDecoration[]}
     */
    MusicRest.prototype.getDecorations = function () {
        return this.decorations;
    };

    /**
     * Get start slurs
     *
     * @method getStartSlurs
     * @returns {MusicSlur[]}
     */
    MusicRest.prototype.getStartSlurs = function () {
        return this.startSlurs;
    };

    /**
     * Get stop slurs
     *
     * @method getStopSlurs
     * @returns {MusicSlur[]}
     */
    MusicRest.prototype.getStopSlurs = function () {
        return this.stopSlurs;
    };

    // Export
    scope.MusicRest = MusicRest;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music result
     *
     * @class MusicResult
     * @extends AbstractResult
     * @param {Object} [obj]
     * @constructor
     */
    function MusicResult(obj) {
        scope.AbstractResult.call(this, obj);
        if (obj) {
            this.result = new scope.MusicDocument(obj.result);
        }
    }

    /**
     * Inheritance property
     */
    MusicResult.prototype = new scope.AbstractResult();

    /**
     * Constructor property
     */
    MusicResult.prototype.constructor = MusicResult;

    /**
     * Get music document
     *
     * @method getMusicDocument
     * @returns {MusicDocument}
     */
    MusicResult.prototype.getMusicDocument = function () {
        return this.result;
    };

    // Export
    scope.MusicResult = MusicResult;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music score
     *
     * @class MusicScore
     * @param {Object} [obj]
     * @constructor
     */
    function MusicScore(obj) {
        this.parts = [];
        if (obj) {
            for (var i in obj.parts) {
                this.parts.push(new scope.MusicPart(obj.parts[i]));
            }
        }
    }

    /**
     * Get parts
     *
     * @method getParts
     * @returns {MusicPart[]}
     */
    MusicScore.prototype.getParts = function () {
        return this.parts;
    };

    // Export
    scope.MusicScore = MusicScore;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music score tree
     *
     * @class MusicScoreTreeResultElement
     * @extends MusicResultElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicScoreTreeResultElement(obj) {
        scope.MusicResultElement.call(this, obj);
        if (obj) {
            this.score = new scope.MusicScore(obj.score);
        }
    }

    /**
     * Inheritance property
     */
    MusicScoreTreeResultElement.prototype = new scope.MusicResultElement();

    /**
     * Constructor property
     */
    MusicScoreTreeResultElement.prototype.constructor = MusicScoreTreeResultElement;

    /**
     * Get score
     *
     * @method getScore
     * @returns {MusicScore}
     */
    MusicScoreTreeResultElement.prototype.getScore = function () {
        return this.score;
    };

    // Export
    scope.MusicScoreTreeResultElement = MusicScoreTreeResultElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music scratch-out
     *
     * @class MusicScratchOut
     * @param {Object} [obj]
     * @constructor
     */
    function MusicScratchOut(obj) {
        this.inputRanges = [];
        this.erasedInputRanges = [];
        if (obj) {
            for (var i in obj.inputRanges) {
                this.inputRanges.push(new scope.MusicInputRange(obj.inputRanges[i]));
            }
            for (var j in obj.erasedInputRanges) {
                this.erasedInputRanges.push(new scope.MusicInputRange(obj.erasedInputRanges[j]));
            }
        }
    }

    /**
     * Get input ranges
     *
     * @method getInputRanges
     * @returns {MusicInputRange[]}
     */
    MusicScratchOut.prototype.getInputRanges = function () {
        return this.inputRanges;
    };

    /**
     * Get erased input ranges
     *
     * @method getErasedInputRanges
     * @returns {MusicInputRange[]}
     */
    MusicScratchOut.prototype.getErasedInputRanges = function () {
        return this.erasedInputRanges;
    };

    // Export
    scope.MusicScratchOut = MusicScratchOut;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music slur
     *
     * @class MusicSlur
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicSlur(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.placement = obj.placement;
        }
    }

    /**
     * Inheritance property
     */
    MusicSlur.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicSlur.prototype.constructor = MusicSlur;

    /**
     * Get placement
     *
     * @method getPlacement
     * @returns {String}
     */
    MusicSlur.prototype.getPlacement = function () {
        return this.placement;
    };

    // Export
    scope.MusicSlur = MusicSlur;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music stem
     *
     * @class MusicStem
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicStem(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Inheritance property
     */
    MusicStem.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicStem.prototype.constructor = MusicStem;

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicStem.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MusicStem = MusicStem;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music tie
     *
     * @class MusicTie
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicTie(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.placement = obj.placement;
        }
    }

    /**
     * Inheritance property
     */
    MusicTie.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicTie.prototype.constructor = MusicTie;

    /**
     * Get placement
     *
     * @method getPlacement
     * @returns {String}
     */
    MusicTie.prototype.getPlacement = function () {
        return this.placement;
    };

    // Export
    scope.MusicTie = MusicTie;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music time modification data
     *
     * @class MusicTimeModificationData
     * @param {Object} [obj]
     * @constructor
     */
    function MusicTimeModificationData(obj) {
        if (obj) {
            this.actual = obj.actual;
            this.dots = obj.dots;
            this.normal = obj.normal;
            this.type = obj.type;
        }
    }

    /**
     * Get actual
     *
     * @method getActual
     * @returns {Number}
     */
    MusicTimeModificationData.prototype.getActual = function () {
        return this.actual;
    };

    /**
     * Get dots
     *
     * @method getDots
     * @returns {Number}
     */
    MusicTimeModificationData.prototype.getDots = function () {
        return this.dots;
    };

    /**
     * Get normal
     *
     * @method getNormal
     * @returns {Number}
     */
    MusicTimeModificationData.prototype.getNormal = function () {
        return this.normal;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicTimeModificationData.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MusicTimeModificationData = MusicTimeModificationData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music time signature
     *
     * @class MusicTimeSignature
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicTimeSignature(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.top = new scope.MusicAnnotation(obj.top);
            this.bottom = new scope.MusicAnnotation(obj.bottom);
            this.type = obj.type;
        }
    }

    /**
     * Inheritance property
     */
    MusicTimeSignature.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicTimeSignature.prototype.constructor = MusicTimeSignature;

    /**
     * Get top
     *
     * @method getTop
     * @returns {MusicAnnotation}
     */
    MusicTimeSignature.prototype.getTop = function () {
        return this.top;
    };

    /**
     * Get bottom
     *
     * @method getBottom
     * @returns {MusicAnnotation}
     */
    MusicTimeSignature.prototype.getBottom = function () {
        return this.bottom;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicTimeSignature.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MusicTimeSignature = MusicTimeSignature;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music tuplet bracket
     *
     * @class MusicTupletBracket
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicTupletBracket(obj) {
        scope.MusicElement.call(this, obj);
        if (obj) {
            this.type = obj.type;
        }
    }

    /**
     * Inheritance property
     */
    MusicTupletBracket.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicTupletBracket.prototype.constructor = MusicTupletBracket;

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    MusicTupletBracket.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.MusicTupletBracket = MusicTupletBracket;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music tuplet
     *
     * @class MusicTuplet
     * @extends MusicElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicTuplet(obj) {
        scope.MusicElement.call(this, obj);
        this.brackets = [];
        if (obj) {
            this.placement = obj.placement;
            this.number = new scope.MusicAnnotation(obj.number);
            for (var i in obj.brackets) {
                this.brackets.push(new scope.MusicTupletBracket(obj.brackets[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    MusicTuplet.prototype = new scope.MusicElement();

    /**
     * Constructor property
     */
    MusicTuplet.prototype.constructor = MusicTuplet;

    /**
     * Get placement
     *
     * @method getPlacement
     * @returns {String}
     */
    MusicTuplet.prototype.getPlacement = function () {
        return this.placement;
    };

    /**
     * Get number
     *
     * @method getNumber
     * @returns {MusicAnnotation}
     */
    MusicTuplet.prototype.getNumber = function () {
        return this.number;
    };

    /**
     * Get brackets
     *
     * @method getBrackets
     * @returns {Array}
     */
    MusicTuplet.prototype.getBrackets = function () {
        return this.brackets;
    };

    // Export
    scope.MusicTuplet = MusicTuplet;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * MusicXML result
     *
     * @class MusicXMLResultElement
     * @extends MusicResultElement
     * @param {Object} [obj]
     * @constructor
     */
    function MusicXMLResultElement(obj) {
        scope.MusicResultElement.call(this, obj);
        if (obj) {
            this.value = obj.value;
        }
    }

    /**
     * Inheritance property
     */
    MusicXMLResultElement.prototype = new scope.MusicResultElement();

    /**
     * Constructor property
     */
    MusicXMLResultElement.prototype.constructor = MusicXMLResultElement;

    /**
     * Get value
     *
     * @method getValue
     * @returns {String}
     */
    MusicXMLResultElement.prototype.getValue = function () {
        return this.value;
    };

    // Export
    scope.MusicXMLResultElement = MusicXMLResultElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer element
     *
     * @class AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerElement(obj) {
        if (obj) {
            this.elementType = obj.elementType;
        }
    }

    /**
     * Get element type
     *
     * @method getElementType
     * @returns {String}
     */
    AnalyzerElement.prototype.getElementType = function () {
        return this.elementType;
    };

    // Export
    scope.AnalyzerElement = AnalyzerElement;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer table cell
     *
     * @class AnalyzerCell
     * @extends AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerCell(obj) {
        scope.AnalyzerElement.call(this, obj);
        if (obj) {
            this.data = new scope.AnalyzerCellData(obj.data);
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerCell.prototype = new scope.AnalyzerElement();

    /**
     * Constructor property
     */
    AnalyzerCell.prototype.constructor = AnalyzerCell;

    /**
     * Get analyzer cell data
     *
     * @method getData
     * @returns {AnalyzerCellData}
     */
    AnalyzerCell.prototype.getData = function () {
        return this.data;
    };

    // Export
    scope.AnalyzerCell = AnalyzerCell;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer cell data
     *
     * @class AnalyzerCellData
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerCellData(obj) {
        if (obj) {
            this.firstColumn = obj.firstColumn;
            this.lastColumn = obj.lastColumn;
            this.firstRow = obj.firstRow;
            this.lastRow = obj.lastRow;
            this.height = obj.height;
            this.width = obj.width;
            this.orientation = obj.orientation;
            this.topLeftPoint = new scope.Point(obj.topLeftPoint);
            this.topBorder = obj.topBorder;
            this.bottomBorder = obj.bottomBorder;
            this.leftBorder = obj.leftBorder;
            this.rightBorder = obj.rightBorder;
        }
    }

    /**
     * Get first column
     *
     * @method getFirstColumn
     * @returns {Number}
     */
    AnalyzerCellData.prototype.getFirstColumn = function () {
        return this.firstColumn;
    };

    /**
     * Get last column
     *
     * @method getLastColumn
     * @returns {Number}
     */
    AnalyzerCellData.prototype.getLastColumn = function () {
        return this.lastColumn;
    };

    /**
     * Get first row
     *
     * @method getFirstRow
     * @returns {Number}
     */
    AnalyzerCellData.prototype.getFirstRow = function () {
        return this.firstRow;
    };

    /**
     * Get last row
     *
     * @method getLastRow
     * @returns {Number}
     */
    AnalyzerCellData.prototype.getLastRow = function () {
        return this.lastRow;
    };

    /**
     * Get height
     *
     * @method getHeight
     * @returns {Number}
     */
    AnalyzerCellData.prototype.getHeight = function () {
        return this.height;
    };

    /**
     * Get width
     *
     * @method getWidth
     * @returns {Number}
     */
    AnalyzerCellData.prototype.getWidth = function () {
        return this.width;
    };

    /**
     * Get orientation
     *
     * @method getOrientation
     * @returns {String}
     */
    AnalyzerCellData.prototype.getOrientation = function () {
        return this.orientation;
    };

    /**
     * Get top-left point
     *
     * @method getTopLeftPoint
     * @returns {Point}
     */
    AnalyzerCellData.prototype.getTopLeftPoint = function () {
        return this.topLeftPoint;
    };

    /**
     * Has top border
     *
     * @method hasTopBorder
     * @returns {Boolean}
     */
    AnalyzerCellData.prototype.hasTopBorder = function () {
        return this.topBorder;
    };

    /**
     * Has bottom border
     *
     * @method hasBottomBorder
     * @returns {Boolean}
     */
    AnalyzerCellData.prototype.hasBottomBorder = function () {
        return this.bottomBorder;
    };

    /**
     * Has left border
     *
     * @method hasLeftBorder
     * @returns {Boolean}
     */
    AnalyzerCellData.prototype.hasLeftBorder = function () {
        return this.leftBorder;
    };

    /**
     * Has right border
     *
     * @method hasRightBorder
     * @returns {Boolean}
     */
    AnalyzerCellData.prototype.hasRightBorder = function () {
        return this.rightBorder;
    };

    /**
     * Get bounding box
     *
     * @method getBoundingBox
     * @returns {Rectangle}
     */
    AnalyzerCellData.prototype.getBoundingBox = function () {
        var rectangle = new scope.Rectangle();
        rectangle.setTopLeftPoint(this.getTopLeftPoint());
        rectangle.setWidth(this.getWidth());
        rectangle.setHeight(this.getHeight());
        return rectangle;
    };

    // Export
    scope.AnalyzerCellData = AnalyzerCellData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer document
     *
     * @class AnalyzerDocument
     * @extends AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerDocument(obj) {
        scope.AnalyzerElement.call(this, obj);
        this.textLines = [];
        this.shapes = [];
        this.tables = [];
        this.groups = [];
        if (obj) {
            for (var i in obj.textLines) {
                this.textLines.push(new scope.AnalyzerTextLine(obj.textLines[i]));
            }
            for (var j in obj.shapes) {
                this.shapes.push(new scope.ShapeSegment(obj.shapes[j]));
            }
            for (var k in obj.tables) {
                this.tables.push(new scope.AnalyzerTable(obj.tables[k]));
            }
            for (var l in obj.groups) {
                this.groups.push(new scope.AnalyzerGroup(obj.groups[l]));
            }
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerDocument.prototype = new scope.AnalyzerElement();

    /**
     * Constructor property
     */
    AnalyzerDocument.prototype.constructor = AnalyzerDocument;

    /**
     * Get text lines
     *
     * @method getTextLines
     * @returns {AnalyzerTextLine[]}
     */
    AnalyzerDocument.prototype.getTextLines = function () {
        return this.textLines;
    };

    /**
     * Get shapes
     *
     * @method getShapes
     * @returns {ShapeSegment[]}
     */
    AnalyzerDocument.prototype.getShapes = function () {
        return this.shapes;
    };

    /**
     * Get tables
     *
     * @method getTables
     * @returns {AnalyzerTable[]}
     */
    AnalyzerDocument.prototype.getTables = function () {
        return this.tables;
    };

    /**
     * Get groups
     *
     * @method getGroups
     * @returns {AnalyzerGroup[]}
     */
    AnalyzerDocument.prototype.getGroups = function () {
        return this.groups;
    };

    // Export
    scope.AnalyzerDocument = AnalyzerDocument;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer element reference
     *
     * @class AnalyzerElementReference
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerElementReference(obj) {
        if (obj) {
            this.uniqueID = obj.uniqueID;
            this.type = obj.type;
        }
    }

    /**
     * Get unique id
     *
     * @method getUniqueId
     * @returns {String}
     */
    AnalyzerElementReference.prototype.getUniqueId = function () {
        return this.uniqueID;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    AnalyzerElementReference.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.AnalyzerElementReference = AnalyzerElementReference;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer group
     *
     * @class AnalyzerGroup
     * @extends AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerGroup(obj) {
        scope.AnalyzerElement.call(this, obj);
        this.elementReferences = [];
        if (obj) {
            this.type = obj.type;
            this.uniqueID = obj.uniqueID;
            for (var i in obj.elementReferences) {
                this.elementReferences.push(new scope.AnalyzerElementReference(obj.elementReferences[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerGroup.prototype = new scope.AnalyzerElement();

    /**
     * Constructor property
     */
    AnalyzerGroup.prototype.constructor = AnalyzerGroup;

    /**
     * Get element references
     *
     * @method getElementReferences
     * @returns {AnalyzerElementReference[]}
     */
    AnalyzerGroup.prototype.getElementReferences = function () {
        return this.elementReferences;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    AnalyzerGroup.prototype.getType = function () {
        return this.type;
    };

    /**
     * Get unique Id
     *
     * @method getUniqueId
     * @returns {String}
     */
    AnalyzerGroup.prototype.getUniqueId = function () {
        return this.uniqueID;
    };

    // Export
    scope.AnalyzerGroup = AnalyzerGroup;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer ink range
     *
     * @class AnalyzerInkRange
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerInkRange(obj) {
        if (obj) {
            this.firstPoint = new scope.Point(obj.firstPoint);
            this.lastPoint = new scope.Point(obj.lastPoint);
            this.stroke = new scope.AnalyzerRecognizedStroke(obj.stroke);
        }
    }

    /**
     * Get first point
     *
     * @method getFirstPoint
     * @returns {Point}
     */
    AnalyzerInkRange.prototype.getFirstPoint = function () {
        return this.firstPoint;
    };

    /**
     * Get last point
     *
     * @method getLastPoint
     * @returns {Point}
     */
    AnalyzerInkRange.prototype.getLastPoint = function () {
        return this.lastPoint;
    };

    /**
     * Get stroke
     *
     * @method getStroke
     * @returns {null|*}
     */
    AnalyzerInkRange.prototype.getStroke = function () {
        return this.stroke;
    };

    // Export
    scope.AnalyzerInkRange = AnalyzerInkRange;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer line
     *
     * @class AnalyzerLine
     * @extends AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerLine(obj) {
        scope.AnalyzerElement.call(this, obj);
        if (obj) {
            this.data = new scope.AnalyzerLineData(obj.data);
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerLine.prototype = new scope.AnalyzerElement();

    /**
     * Constructor property
     */
    AnalyzerLine.prototype.constructor = AnalyzerLine;

    /**
     * Get data
     *
     * @method getData
     * @returns {AnalyzerLineData}
     */
    AnalyzerLine.prototype.getData = function () {
        return this.data;
    };

    // Export
    scope.AnalyzerLine = AnalyzerLine;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer line data
     *
     * @class AnalyzerLineData
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerLineData(obj) {
        if (obj) {
            this.p1 = new scope.Point(obj.p1);
            this.p2 = new scope.Point(obj.p2);
        }
    }

    /**
     * Get p1
     *
     * @method getP1
     * @returns {Point}
     */
    AnalyzerLineData.prototype.getP1 = function () {
        return this.p1;
    };

    /**
     * Get p2
     *
     * @method getP2
     * @returns {Point}
     */
    AnalyzerLineData.prototype.getP2 = function () {
        return this.p2;
    };

    // Export
    scope.AnalyzerLineData = AnalyzerLineData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * AnalyzerRecognizedStroke
     *
     * @class AnalyzerRecognizedStroke
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerRecognizedStroke(obj) {
        if (obj) {
            this.type = obj.type;
            this.x = obj.x;
            this.y = obj.y;
        }
    }

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    AnalyzerRecognizedStroke.prototype.getType = function () {
        return this.type;
    };

    /**
     * Get x
     *
     * @method getX
     * @returns {Number[]}
     */
    AnalyzerRecognizedStroke.prototype.getX = function () {
        return this.x;
    };

    /**
     * Get y
     *
     * @method getY
     * @returns {Number[]}
     */
    AnalyzerRecognizedStroke.prototype.getY = function () {
        return this.y;
    };

    // Export
    scope.AnalyzerRecognizedStroke = AnalyzerRecognizedStroke;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer result
     *
     * @class AnalyzerResult
     * @extends AbstractResult
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerResult(obj) {
        scope.AbstractResult.call(this, obj);
        if (obj) {
            this.result = new scope.AnalyzerDocument(obj.result);
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerResult.prototype = new scope.AbstractResult();

    /**
     * Constructor property
     */
    AnalyzerResult.prototype.constructor = AnalyzerResult;

    /**
     * Get analyzer document
     *
     * @method getAnalyzerDocument
     * @returns {AnalyzerDocument}
     */
    AnalyzerResult.prototype.getAnalyzerDocument = function () {
        return this.result;
    };

    // Export
    scope.AnalyzerResult = AnalyzerResult;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer stroke type
     *
     * @class AnalyzerStrokeType
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerStrokeType(obj) {
        if (obj) {
            this.inkRange = new scope.AnalyzerInkRange(obj.inkRange);
            this.type = obj.type;
        }
    }

    /**
     * Get ink range
     *
     * @method getInkRange
     * @returns {AnalyzerInkRange}
     */
    AnalyzerStrokeType.prototype.getInkRange = function () {
        return this.inkRange;
    };

    /**
     * Get type
     *
     * @method getType
     * @returns {String}
     */
    AnalyzerStrokeType.prototype.getType = function () {
        return this.type;
    };

    // Export
    scope.AnalyzerStrokeType = AnalyzerStrokeType;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer table
     *
     * @class AnalyzerTable
     * @extends AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerTable(obj) {
        scope.AnalyzerElement.call(this, obj);
        this.lines = [];
        this.cells = [];
        this.inkRanges = [];
        if (obj) {
            this.data = new scope.AnalyzerTableData(obj.data);
            for (var i in obj.lines) {
                this.lines.push(new scope.AnalyzerLine(obj.lines[i]));
            }
            for (var j in obj.cells) {
                this.cells.push(new scope.AnalyzerCell(obj.cells[j]));
            }
            for (var k in obj.inkRanges) {
                this.inkRanges.push(new scope.AnalyzerInkRange(obj.inkRanges[k]));
            }
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerTable.prototype = new scope.AnalyzerElement();

    /**
     * Constructor property
     */
    AnalyzerTable.prototype.constructor = AnalyzerTable;

    /**
     * Get data
     *
     * @method getData
     * @returns {AnalyzerTableData}
     */
    AnalyzerTable.prototype.getData = function () {
        return this.data;
    };

    /**
     * Get lines
     *
     * @method getLines
     * @returns {AnalyzerLine[]}
     */
    AnalyzerTable.prototype.getLines = function () {
        return this.lines;
    };

    /**
     * Get cells
     *
     * @method getCells
     * @returns {AnalyzerCell[]}
     */
    AnalyzerTable.prototype.getCells = function () {
        return this.cells;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {AnalyzerInkRange[]}
     */
    AnalyzerTable.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    // Export
    scope.AnalyzerTable = AnalyzerTable;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer table data
     *
     * @class AnalyzerTableData
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerTableData(obj) {
        if (obj) {
            this.columnCount = obj.columnCount;
            this.rowCount = obj.rowCount;
        }
    }

    /**
     * Get column count
     *
     * @method getColumnCount
     * @returns {Number}
     */
    AnalyzerTableData.prototype.getColumnCount = function () {
        return this.columnCount;
    };

    /**
     * Get row count
     *
     * @method getRowCount
     * @returns {Number}
     */
    AnalyzerTableData.prototype.getRowCount = function () {
        return this.rowCount;
    };

    // Export
    scope.AnalyzerTableData = AnalyzerTableData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer text line
     *
     * @class AnalyzerTextLine
     * @extends AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerTextLine(obj) {
        scope.AnalyzerElement.call(this, obj);
        this.inkRanges = [];
        this.underlineList = [];
        if (obj) {
            this.data = new scope.AnalyzerTextLineData(obj.data);
            this.result = new scope.TextDocument(obj.result);
            for (var i in obj.inkRanges) {
                this.inkRanges.push(new scope.AnalyzerInkRange(obj.inkRanges[i]));
            }
            for (var j in obj.underlineList) {
                this.underlineList.push(new scope.AnalyzerUnderline(obj.underlineList[j]));
            }
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerTextLine.prototype = new scope.AnalyzerElement();

    /**
     * Constructor property
     */
    AnalyzerTextLine.prototype.constructor = AnalyzerTextLine;

    /**
     * Get data
     *
     * @method getData
     * @returns {AnalyzerTextLineData}
     */
    AnalyzerTextLine.prototype.getData = function () {
        return this.data;
    };

    /**
     * Get text document
     *
     * @method getTextDocument
     * @returns {TextDocument}
     */
    AnalyzerTextLine.prototype.getTextDocument = function () {
        return this.result;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {AnalyzerInkRange[]}
     */
    AnalyzerTextLine.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    /**
     * Get underline list
     *
     * @method getUnderlineList
     * @returns {AnalyzerUnderline[]}
     */
    AnalyzerTextLine.prototype.getUnderlineList = function () {
        return this.underlineList;
    };

    // Export
    scope.AnalyzerTextLine = AnalyzerTextLine;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer text line data
     *
     * @class AnalyzerTextLineData
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerTextLineData(obj) {
        if (obj) {
            this.baselinePos = obj.baselinePos;
            this.toMidline = obj.toMidline;
            this.orientation = obj.orientation;
            this.topLeftPoint = new scope.Point(obj.topLeftPoint);
            this.textHeight = obj.textHeight;
            this.justificationType = obj.justificationType;
            this.height = obj.height;
            this.width = obj.width;
        }
    }

    /**
     * Get baseline position
     *
     * @method getBaselinePos
     * @returns {Number}
     */
    AnalyzerTextLineData.prototype.getBaselinePos = function () {
        return this.baselinePos;
    };

    /**
     * Get to midline
     *
     * @method getToMidline
     * @returns {Number}
     */
    AnalyzerTextLineData.prototype.getToMidline = function () {
        return this.toMidline;
    };

    /**
     * Get orientation
     *
     * @method getOrientation
     * @returns {String}
     */
    AnalyzerTextLineData.prototype.getOrientation = function () {
        return this.orientation;
    };

    /**
     * Get top-left point
     *
     * @method getTopLeftPoint
     * @returns {Point}
     */
    AnalyzerTextLineData.prototype.getTopLeftPoint = function () {
        return this.topLeftPoint;
    };

    /**
     * Get text height
     *
     * @method getTextHeight
     * @returns {Number}
     */
    AnalyzerTextLineData.prototype.getTextHeight = function () {
        return this.textHeight;
    };

    /**
     * Get justification type
     *
     * @method getJustificationType
     * @returns {String}
     */
    AnalyzerTextLineData.prototype.getJustificationType = function () {
        return this.justificationType;
    };

    /**
     * Get height
     *
     * @method getHeight
     * @returns {Number}
     */
    AnalyzerTextLineData.prototype.getHeight = function () {
        return this.height;
    };

    /**
     * Get width
     *
     * @method getWidth
     * @returns {Number}
     */
    AnalyzerTextLineData.prototype.getWidth = function () {
        return this.width;
    };

    /**
     * Get bounding box
     *
     * @method getBoundingBox
     * @returns {Rectangle}
     */
    AnalyzerTextLineData.prototype.getBoundingBox = function () {
        var rectangle = new scope.Rectangle();
        if (this.getTopLeftPoint() || this.getWidth() || this.getHeight()) {
            rectangle.setTopLeftPoint(this.getTopLeftPoint());
            rectangle.setWidth(this.getWidth());
            rectangle.setHeight(this.getHeight());
        }
        return rectangle;
    };

    // Export
    scope.AnalyzerTextLineData = AnalyzerTextLineData;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer underline
     *
     * @class AnalyzerUnderline
     * @extends AnalyzerElement
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerUnderline(obj) {
        scope.AnalyzerElement.call(this, obj);
        this.inkRanges = [];
        if (obj) {
            this.data = new scope.AnalyzerUnderlineData(obj.data);
            for (var i in obj.inkRanges) {
                this.inkRanges.push(new scope.AnalyzerInkRange(obj.inkRanges[i]));
            }
        }
    }

    /**
     * Inheritance property
     */
    AnalyzerUnderline.prototype = new scope.AnalyzerElement();

    /**
     * Constructor property
     */
    AnalyzerUnderline.prototype.constructor = AnalyzerUnderline;

    /**
     * Get data
     *
     * @method getData
     * @returns {AnalyzerUnderlineData}
     */
    AnalyzerUnderline.prototype.getData = function () {
        return this.data;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {AnalyzerInkRange[]}
     */
    AnalyzerUnderline.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    // Export
    scope.AnalyzerUnderline = AnalyzerUnderline;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer underline data
     *
     * @class AnalyzerUnderlineData
     * @param {Object} [obj]
     * @constructor
     */
    function AnalyzerUnderlineData(obj) {
        if (obj) {
            this.firstCharacter = obj.firstCharacter;
            this.lastCharacter = obj.lastCharacter;
        }
    }

    /**
     * Get first character
     *
     * @method getFirstCharacter
     * @returns {Number}
     */
    AnalyzerUnderlineData.prototype.getFirstCharacter = function () {
        return this.firstCharacter;
    };

    /**
     * Get last character
     *
     * @method getLastCharacter
     * @returns {Number}
     */
    AnalyzerUnderlineData.prototype.getLastCharacter = function () {
        return this.lastCharacter;
    };

    // Export
    scope.AnalyzerUnderlineData = AnalyzerUnderlineData;
})(MyScript);
'use strict';

(function (scope, Q) {
    /**
     * Network interface
     *
     * @class NetworkInterface
     * @constructor
     */
    function NetworkInterface() {
    }

    /**
     * Parse JSON String to Object
     *
     * @method parse
     * @param {Object} req
     * @returns {Object}
     */
    NetworkInterface.parse = function (req) {
        var result;
        try {
            result = JSON.parse(req.responseText);
        } catch (e) {
            result = req.responseText;
        }
        return result;
    };

    /**
     * Transform object data request to a list of parameters
     *
     * @method transformRequest
     * @param {Object} [obj]
     * @returns {String}
     */
    NetworkInterface.transformRequest = function (obj) {
        var str = [];
        for (var p in obj) {
            if ((typeof obj[p] !== 'undefined') &&
                (typeof obj[p] !== 'function')) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    };

    /**
     * Send request to the network and return a promise
     *
     * @method xhr
     * @param {String} type
     * @param {String} url
     * @param {Object} data
     * @returns {Promise}
     */
    NetworkInterface.prototype.xhr = function (type, url, data) {

        var deferred = Q.defer();

        function onStateChange() {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    deferred.resolve(NetworkInterface.parse(request));
                }
            }
        }

        function onLoad() {
            if (request.status >= 200 && request.status < 300) {
                deferred.resolve(NetworkInterface.parse(request));
            } else {
                deferred.reject(new Error(request.responseText));
            }
        }

        function onError() {
            deferred.reject(new Error('Can\'t XHR ' + url));
        }

        function onProgress(event) {
            deferred.notify(event.loaded / event.total);
        }

        var request = new XMLHttpRequest();
        request.open(type, url, true);
        request.withCredentials = true;
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        request.onload = onLoad;
        request.onerror = onError;
        request.onprogress = onProgress;
        request.onreadystatechange = onStateChange;
        request.send(NetworkInterface.transformRequest(data));

        return deferred.promise;
    };

    /**
     * Get request
     *
     * @method get
     * @param {String} src
     * @param {Object} params
     * @returns {Promise}
     */
    NetworkInterface.prototype.get = function (src, params) {
        if (params) {
            src += '?' + NetworkInterface.transformRequest(params);
        }
        return this.xhr('GET', src).then(
            function success(response) {
                return response;
            }, function error(response) {
                throw response;
            });
    };

    /**
     * Put request
     *
     * @method put
     * @param {String} src
     * @param {Object} data
     * @returns {Promise}
     */
    NetworkInterface.prototype.put = function (url, data) {
        return this.xhr('PUT', url, data).then(
            function success(response) {
                return response;
            }, function error(response) {
                throw response;
            });
    };

    /**
     * Post request
     *
     * @method post
     * @param {String} src
     * @param {Object} data
     * @returns {Promise}
     */
    NetworkInterface.prototype.post = function (url, data) {
        return this.xhr('POST', url, data).then(
            function success(response) {
                return response;
            }, function error(response) {
                throw response;
            });
    };

    /**
     * Delete request
     *
     * @method delete
     * @param {String} src
     * @param {Object} data
     * @returns {Promise}
     */
    NetworkInterface.prototype.delete = function (url, data) {
        return this.xhr('DELETE', url, data).then(
            function success(response) {
                return response;
            }, function error(response) {
                throw response;
            });
    };

    // Export
    scope.NetworkInterface = NetworkInterface;
})(MyScript, Q);

'use strict';

(function (scope, CryptoJS) {
    /**
     * Abstract recognizer interface
     *
     * @class AbstractRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function AbstractRecognizer(host) {
        this.host = 'cloud.myscript.com';
        if (host) {
            this.host = host;
        }
        this.http = new scope.NetworkInterface();
    }

    /**
     * Get the recognition languages available for an application and a specific inputMode
     *
     * @method getAvailableLanguageList
     * @param {String} applicationKey
     * @param {String} inputMode
     * @returns {Promise}
     */
    AbstractRecognizer.prototype.getAvailableLanguageList = function (applicationKey, inputMode) {
        var data = new scope.RecognitionLanguagesData();
        data.setApplicationKey(applicationKey);
        data.setInputMode(inputMode);

        return this.http.get('https://' + this.host + '/api/v3.0/recognition/rest/text/languages.json', data).then(
            function success(response) {
                return response.result;
            },
            function error(response) {
                return response;
            }
        );
    };

    /**
     * Compute HMAC signature for server authentication
     *
     * @method computeHmac
     * @param {String} applicationKey
     * @param {String} data
     * @param {String} hmacKey
     */
    AbstractRecognizer.prototype.computeHmac = function (applicationKey, data, hmacKey) {
        var jsonInput = (typeof data === 'object') ? JSON.stringify(data) : data;
        return CryptoJS.HmacSHA512(jsonInput, applicationKey + hmacKey).toString(CryptoJS.enc.Hex);
    };
    // Export
    scope.AbstractRecognizer = AbstractRecognizer;
})(MyScript, CryptoJS);
'use strict';

(function (scope) {
    /**
     * Abstract WebSocket recognizer interface
     *
     * @class AbstractWSRecognizer
     * @extends AbstractRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function AbstractWSRecognizer(host) {
        scope.AbstractRecognizer.call(this, host);
    }

    /**
     * Inheritance property
     */
    AbstractWSRecognizer.prototype = new scope.AbstractRecognizer();

    /**
     * Constructor property
     */
    AbstractWSRecognizer.prototype.constructor = AbstractWSRecognizer;

    AbstractWSRecognizer.prototype.getMessageCallback = function () {
        return this.messageCallback;
    };

    AbstractWSRecognizer.prototype.setMessageCallback = function (callback) {
        this.messageCallback = callback;
    };

    AbstractWSRecognizer.prototype.getOpenCallback = function () {
        return this.openCallback;
    };

    AbstractWSRecognizer.prototype.setOpenCallback = function (callback) {
        this.openCallback = callback;
    };

    AbstractWSRecognizer.prototype.getCloseCallback = function () {
        return this.closeCallback;
    };

    AbstractWSRecognizer.prototype.setCloseCallback = function (callback) {
        this.closeCallback = callback;
    };

    AbstractWSRecognizer.prototype.getErrorCallback = function () {
        return this.errorCallback;
    };

    AbstractWSRecognizer.prototype.setErrorCallback = function (callback) {
        this.errorCallback = callback;
    };

    /**
     * Get the current state of the connection
     *
     * @method getState
     * @returns {Promise}
     */
    AbstractWSRecognizer.prototype.getState = function () {
        var deferred = Q.defer();
        if (!this.socket) {
            deferred.reject(new Error('Can\'t find WebSocket'));
        } else {
            deferred.resolve(this.socket.readyState);
        }
        return deferred.promise;
    };

    /**
     * Close the socket
     *
     * @method close
     * @returns {Promise}
     */
    AbstractWSRecognizer.prototype.close = function () {
        var deferred = Q.defer();
        if (!this.socket) {
            deferred.reject(new Error('Can\'t find WebSocket'));
        } else {
            deferred.resolve(this.socket.close());
        }
        return deferred.promise;
    };

    /**
     * Send a message
     *
     * @method sendMessage
     * @param {AbstractWSMessage} message
     * @returns {Promise}
     */
    AbstractWSRecognizer.prototype.sendMessage = function (message) {
        var deferred = Q.defer();
        if (!this.socket) {
            deferred.reject(new Error('Can\'t find WebSocket'));
        } else {
            deferred.resolve(this.socket.send(JSON.stringify(message)));
        }
        return deferred.promise;
    };

    /**
     * Initialize the WebSocket
     *
     * @method initWSRecognition
     * @param {String} applicationKey
     * @returns {Promise}
     */
    AbstractWSRecognizer.prototype.initWSRecognition = function (applicationKey) {
        var message = new scope.InitRequestWSMessage();
        message.setApplicationKey(applicationKey);
        return this.sendMessage(message);
    };

    /**
     * Authenticate the WebSocket client end with a handshake of HMAC signature
     *
     * @method takeUpHmacChallenge
     * @param {String} applicationKey
     * @param {String} challenge
     * @param {String} hmacKey
     * @returns {Promise}
     */
    AbstractWSRecognizer.prototype.takeUpHmacChallenge = function (applicationKey, challenge, hmacKey) {
        var message = new scope.ChallengeRequestWSMessage();
        message.setApplicationKey(applicationKey);
        message.setChallenge(challenge);
        if (hmacKey) {
            message.setHmacSignature(this.computeHmac(applicationKey, challenge, hmacKey));
        }
        return this.sendMessage(message);
    };

    /**
     * Reset the WebSocket recognition session
     *
     * @method resetWSRecognition
     * @returns {Promise}
     */
    AbstractWSRecognizer.prototype.resetWSRecognition = function () {
        var message = new scope.ResetRequestWSMessage();
        return this.sendMessage(message);
    };

    // Export
    scope.AbstractWSRecognizer = AbstractWSRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text recognizer interface
     *
     * @class TextRecognizer
     * @extends AbstractRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function TextRecognizer(host) {
        scope.AbstractRecognizer.call(this, host);
        this.parameters = new scope.TextParameter();
        this.parameters.setLanguage('en_US');
        this.parameters.setInputMode('CURSIVE');
    }

    /**
     * Inheritance property
     */
    TextRecognizer.prototype = new scope.AbstractRecognizer();

    /**
     * Constructor property
     */
    TextRecognizer.prototype.constructor = TextRecognizer;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {TextParameter}
     */
    TextRecognizer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {TextParameter} parameters
     */
    TextRecognizer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Do text recognition
     *
     * @method doSimpleRecognition
     * @param {String} applicationKey
     * @param {TextParameter} parameters
     * @param {String} instanceId
     * @param {TextInputUnit[]} inputUnits
     * @param {String} hmacKey
     * @returns {Promise}
     */
    TextRecognizer.prototype.doSimpleRecognition = function (applicationKey, instanceId, inputUnits, hmacKey, parameters) {
        var input = new scope.TextRecognitionInput();
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        input.setParameters(params);
        input.setInputUnits(inputUnits);

        var data = new scope.TextRecognitionData();
        data.setApplicationKey(applicationKey);
        data.setTextRecognitionInput(input);
        data.setInstanceId(instanceId);
        if (hmacKey) {
            data.setHmac(this.computeHmac(applicationKey, input, hmacKey));
        }

        return this.http.post('https://' + this.host + '/api/v3.0/recognition/rest/text/doSimpleRecognition.json', data).then(
            function success(response) {
                return new scope.TextResult(response);
            },
            function error(response) {
                throw response;
            }
        );
    };

    // Export
    scope.TextRecognizer = TextRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Text WebSocket recognizer interface
     *
     * @class TextWSRecognizer
     * @extends AbstractWSRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function TextWSRecognizer(host) {
        scope.AbstractWSRecognizer.call(this, host);
        this.parameters = new scope.TextParameter();
        this.parameters.setLanguage('en_US');
        this.parameters.setInputMode('CURSIVE');

        this.socket = new WebSocket('ws://' + this.host + '/api/v3.0/recognition/ws/text');
        var self = this;
        this.socket.onopen = function (message) {
            console.log('WebSocket opened');
            if (self.openCallback) {
                self.openCallback(message);
            }
        };
        this.socket.onmessage = function (message) {
            var data = JSON.parse(message.data);
            console.log('WebSocket message received');
            switch (data.type) {
                case 'init':
                    data = new scope.InitResponseWSMessage(data);
                    break;
                case 'error':
                    data = new scope.ErrorResponseWSMessage(data);
                    break;
                case 'hmacChallenge':
                    data = new scope.ChallengeResponseWSMessage(data);
                    break;
                default:
                    data = new scope.TextResponseWSMessage(data);
                    break;
            }
            if (self.messageCallback) {
                self.messageCallback(data);
            }
        };
        this.socket.onerror = function (message) {
            console.log('WebSocket error received');
            if (self.errorCallback) {
                self.errorCallback(message);
            }
        };
        this.socket.onclose = function (message) {
            console.log('WebSocket opened');
            if (self.closeCallback) {
                self.closeCallback(message);
            }
        };
    }

    /**
     * Inheritance property
     */
    TextWSRecognizer.prototype = new scope.AbstractWSRecognizer();

    /**
     * Constructor property
     */
    TextWSRecognizer.prototype.constructor = TextWSRecognizer;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {TextParameter}
     */
    TextWSRecognizer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {TextParameter} parameters
     */
    TextWSRecognizer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Start the WebSocket session
     *
     * @method startWSRecognition
     * @param {TextInputUnit[]} inputUnits
     * @param {TextParameter} [parameters]
     * @returns {Promise}
     */
    TextWSRecognizer.prototype.startWSRecognition = function (inputUnits, parameters) {
        var message = new scope.TextStartRequestWSMessage();
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        message.setParameters(params);
        message.setInputUnits(inputUnits);
        return this.sendMessage(message);
    };

    /**
     * Continue the recognition
     *
     * @method continueWSRecognition
     * @param {TextInputUnit[]} inputUnits
     * @param {String} instanceId
     * @returns {Promise}
     */
    TextWSRecognizer.prototype.continueWSRecognition = function (inputUnits, instanceId) {
        var message = new scope.TextContinueRequestWSMessage();
        message.setInputUnits(inputUnits);
        message.setInstanceId(instanceId);
        return this.sendMessage(message);
    };

    /**
     * Do text WebSocket recognition
     *
     * @method doWSRecognition
     * @param {String} instanceId
     * @param {TextInputUnit[]} inputUnits
     * @param {MathParameter} [parameters]
     * @returns {Promise}
     */
    TextWSRecognizer.prototype.doWSRecognition = function (instanceId, inputUnits, parameters) {
        if (!instanceId) {
            return this.startWSRecognition(inputUnits, parameters);
        } else {
            return this.continueWSRecognition(inputUnits, instanceId);
        }
    };

    // Export
    scope.TextWSRecognizer = TextWSRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Shape recognizer interface
     *
     * @class ShapeRecognizer
     * @extends AbstractRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function ShapeRecognizer(host) {
        scope.AbstractRecognizer.call(this, host);
        this.parameters = new scope.ShapeParameter();
    }

    /**
     * Inheritance property
     */
    ShapeRecognizer.prototype = new scope.AbstractRecognizer();

    /**
     * Constructor property
     */
    ShapeRecognizer.prototype.constructor = ShapeRecognizer;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {ShapeParameter}
     */
    ShapeRecognizer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {ShapeParameter} parameters
     */
    ShapeRecognizer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Do shape recognition
     *
     * @method doSimpleRecognition
     * @param {String} applicationKey
     * @param {String} instanceId
     * @param {AbstractComponent[]} components
     * @param {String} hmacKey
     * @param {ShapeParameter} [parameters]
     * @returns {Promise}
     */
    ShapeRecognizer.prototype.doSimpleRecognition = function (applicationKey, instanceId, components, hmacKey, parameters) {
        var input = new scope.ShapeRecognitionInput();
        input.setComponents(components);
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        input.setDoBeautification(params.hasBeautification());
        input.setRejectDetectionSensitivity(params.getRejectDetectionSensitivity());

        var data = new scope.ShapeRecognitionData();
        data.setApplicationKey(applicationKey);
        data.setShapeRecognitionInput(input);
        data.setInstanceId(instanceId);
        if (hmacKey) {
            data.setHmac(this.computeHmac(applicationKey, input, hmacKey));
        }

        return this.http.post('https://' + this.host + '/api/v3.0/recognition/rest/shape/doSimpleRecognition.json', data).then(
            function success(response) {
                return new scope.ShapeResult(response);
            },
            function error(response) {
                throw response;
            }
        );
    };

    /**
     * Clear shape recognition session
     *
     * @method clearShapeRecognitionSession
     * @param {String} applicationKey
     * @param {String} instanceId
     * @returns {Promise}
     */
    ShapeRecognizer.prototype.clearShapeRecognitionSession = function (applicationKey, instanceId) {

        var data = {
            instanceSessionId: instanceId
        };

        return this.http.post('https://' + this.host + '/api/v3.0/recognition/rest/shape/clearSessionId.json', data).then(
            function success(response) {
                return response;
            },
            function error(response) {
                throw response;
            }
        );
    };

    // Export
    scope.ShapeRecognizer = ShapeRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math recognizer interface
     *
     * @class MathRecognizer
     * @extends AbstractRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function MathRecognizer(host) {
        scope.AbstractRecognizer.call(this, host);
        this.parameters = new scope.MathParameter();
    }

    /**
     * Inheritance property
     */
    MathRecognizer.prototype = new scope.AbstractRecognizer();

    /**
     * Constructor property
     */
    MathRecognizer.prototype.constructor = MathRecognizer;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {MathParameter}
     */
    MathRecognizer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {MathParameter} parameters
     */
    MathRecognizer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Do math recognition
     *
     * @method doSimpleRecognition
     * @param {String} applicationKey
     * @param {String} instanceId
     * @param {AbstractComponent[]} components
     * @param {String} hmacKey
     * @param {MathParameter} [parameters]
     * @returns {Promise}
     */
    MathRecognizer.prototype.doSimpleRecognition = function (applicationKey, instanceId, components, hmacKey, parameters) {
        var input = new scope.MathRecognitionInput();
        input.setComponents(components);
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        input.setResultTypes(params.getResultTypes());
        input.setColumnar(params.isColumnar());
        input.setScratchOutDetectionSensitivity(params.getScratchOutDetectionSensitivity());
        input.setUserResources(params.getUserResources());

        var data = new scope.MathRecognitionData();
        data.setApplicationKey(applicationKey);
        data.setMathRecognitionInput(input);
        data.setInstanceId(instanceId);
        if (hmacKey) {
            data.setHmac(this.computeHmac(applicationKey, input, hmacKey));
        }

        return this.http.post('https://' + this.host + '/api/v3.0/recognition/rest/math/doSimpleRecognition.json', data).then(
            function success(response) {
                return new scope.MathResult(response);
            },
            function error(response) {
                throw response;
            }
        );
    };

    // Export
    scope.MathRecognizer = MathRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Math WebSocket recognizer interface
     *
     * @class MathWSRecognizer
     * @extends AbstractWSRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function MathWSRecognizer(host) {
        scope.AbstractWSRecognizer.call(this, host);
        this.parameters = new scope.MathParameter();

        this.socket = new WebSocket('ws://' + this.host + '/api/v3.0/recognition/ws/math');
        var self = this;
        this.socket.onopen = function (message) {
            console.log('WebSocket opened');
            if (self.openCallback) {
                self.openCallback(message);
            }
        };
        this.socket.onmessage = function (message) {
            var data = JSON.parse(message.data);
            console.log('WebSocket message received');
            switch (data.type) {
                case 'init':
                    data = new scope.InitResponseWSMessage(data);
                    break;
                case 'error':
                    data = new scope.ErrorResponseWSMessage(data);
                    break;
                case 'hmacChallenge':
                    data = new scope.ChallengeResponseWSMessage(data);
                    break;
                default:
                    data = new scope.MathResponseWSMessage(data);
                    break;
            }
            if (self.messageCallback) {
                self.messageCallback(data);
            }
        };
        this.socket.onerror = function (message) {
            console.log('WebSocket error received');
            if (self.errorCallback) {
                self.errorCallback(message);
            }
        };
        this.socket.onclose = function (message) {
            console.log('WebSocket opened');
            if (self.closeCallback) {
                self.closeCallback(message);
            }
        };
    }

    /**
     * Inheritance property
     */
    MathWSRecognizer.prototype = new scope.AbstractWSRecognizer();

    /**
     * Constructor property
     */
    MathWSRecognizer.prototype.constructor = MathWSRecognizer;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {MathParameter}
     */
    MathWSRecognizer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {MathParameter} parameters
     */
    MathWSRecognizer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Start the WebSocket session
     *
     * @method startWSRecognition
     * @param {AbstractComponent[]} components
     * @param {MathParameter} [parameters]
     * @returns {Promise}
     */
    MathWSRecognizer.prototype.startWSRecognition = function (components, parameters) {
        var message = new scope.MathStartRequestWSMessage();
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        message.setParameters(params);
        message.setComponents(components);
        return this.sendMessage(message);
    };

    /**
     * Continue the recognition
     *
     * @method continueWSRecognition
     * @param {AbstractComponent[]} components
     * @param {String} instanceId
     * @returns {Promise}
     */
    MathWSRecognizer.prototype.continueWSRecognition = function (components, instanceId) {
        var message = new scope.MathContinueRequestWSMessage();
        message.setComponents(components);
        message.setInstanceId(instanceId);
        return this.sendMessage(message);
    };

    /**
     * Do math WebSocket recognition
     *
     * @method doWSRecognition
     * @param {String} instanceId
     * @param {AbstractComponent[]} components
     * @param {MathParameter} [parameters]
     * @returns {Promise}
     */
    MathWSRecognizer.prototype.doWSRecognition = function (instanceId, components, parameters) {
        if (!instanceId) {
            return this.startWSRecognition(components, parameters);
        } else {
            return this.continueWSRecognition(components, instanceId);
        }
    };

    // Export
    scope.MathWSRecognizer = MathWSRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Music recognizer interface
     *
     * @class MusicRecognizer
     * @extends AbstractRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function MusicRecognizer(host) {
        scope.AbstractRecognizer.call(this, host);
        this.parameters = new scope.MusicParameter();
    }

    /**
     * Inheritance property
     */
    MusicRecognizer.prototype = new scope.AbstractRecognizer();

    /**
     * Constructor property
     */
    MusicRecognizer.prototype.constructor = MusicRecognizer;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {MusicParameter}
     */
    MusicRecognizer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {MusicParameter} parameters
     */
    MusicRecognizer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Do music recognition
     *
     * @method doSimpleRecognition
     * @param {String} applicationKey
     * @param {String} instanceId
     * @param {AbstractComponent[]} components
     * @param {String} hmacKey
     * @param {MusicParameter} [parameters]
     * @returns {Promise}
     */
    MusicRecognizer.prototype.doSimpleRecognition = function (applicationKey, instanceId, components, hmacKey, parameters) {
        var input = new scope.MusicRecognitionInput();
        input.setComponents(components);
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        input.setStaff(params.getStaff());
        input.setDivisions(params.getDivisions());
        input.setResultTypes(params.getResultTypes());
        input.setScratchOutDetectionSensitivity(params.getScratchOutDetectionSensitivity());
        input.setUserResources(params.getUserResources());

        var data = new scope.MusicRecognitionData();
        data.setApplicationKey(applicationKey);
        data.setMusicRecognitionInput(input);
        data.setInstanceId(instanceId);
        if (hmacKey) {
            data.setHmac(this.computeHmac(applicationKey, input, hmacKey));
        }

        return this.http.post('https://' + this.host + '/api/v3.0/recognition/rest/music/doSimpleRecognition.json', data).then(
            function success(response) {
                return new scope.MusicResult(response);
            },
            function error(response) {
                throw response;
            }
        );
    };

    // Export
    scope.MusicRecognizer = MusicRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Analyzer recognizer interface
     *
     * @class AnalyzerRecognizer
     * @extends AbstractRecognizer
     * @param {String} [host='cloud.myscript.com'] Recognition service host
     * @constructor
     */
    function AnalyzerRecognizer(host) {
        scope.AbstractRecognizer.call(this, host);
        this.parameters = new scope.AnalyzerParameter();
    }

    /**
     * Inheritance property
     */
    AnalyzerRecognizer.prototype = new scope.AbstractRecognizer();

    /**
     * Constructor property
     */
    AnalyzerRecognizer.prototype.constructor = AnalyzerRecognizer;

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {AnalyzerParameter}
     */
    AnalyzerRecognizer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {AnalyzerParameter} parameters
     */
    AnalyzerRecognizer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * Do analyzer recognition
     *
     * @method doSimpleRecognition
     * @param {String} applicationKey
     * @param {String} instanceId
     * @param {AbstractComponent[]} components
     * @param {String} hmacKey
     * @param {AnalyzerParameter} [parameters]
     * @returns {Promise}
     */
    AnalyzerRecognizer.prototype.doSimpleRecognition = function (applicationKey, instanceId, components, hmacKey, parameters) {
        var input = new scope.AnalyzerRecognitionInput();
        input.setComponents(components);
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        input.setParameters(params);

        var data = new scope.AnalyzerRecognitionData();
        data.setApplicationKey(applicationKey);
        data.setAnalyzerRecognitionInput(input);
        data.setInstanceId(instanceId);
        if (hmacKey) {
            data.setHmac(this.computeHmac(applicationKey, input, hmacKey));
        }

        return this.http.post('https://' + this.host + '/api/v3.0/recognition/rest/analyzer/doSimpleRecognition.json', data).then(
            function success(response) {
                return new scope.AnalyzerResult(response);
            },
            function error(response) {
                return response;
            }
        );
    };

    // Export
    scope.AnalyzerRecognizer = AnalyzerRecognizer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Parameters used for both input and output canvas draw. Default values:
     * color: 'black';
     * rectColor: 'rgba(0, 0, 0, 0.2)';
     * font: 'Times New Roman';
     * decoration: '';
     * width: 4;
     * pressureType: 'SIMULATED';
     * alpha: '1.0';
     * showBoundingBoxes: false;
     *
     * @class RenderingParameters
     * @constructor
     */
    function RenderingParameters() {
        this.color = 'black';
        this.rectColor = 'rgba(0, 0, 0, 0.2)';
        this.font = 'Times New Roman';
        this.decoration = '';
        this.width = 4;
        this.pressureType = 'SIMULATED';
        this.alpha = '1.0';
    }

    /**
     * Get the color renderer parameter
     *
     * @method getColor
     * @returns {String} The color of the ink
     */
    RenderingParameters.prototype.getColor = function () {
        return this.color;
    };

    /**
     * Set the color renderer parameter
     *
     * @method setColor
     * @param {String} color
     */
    RenderingParameters.prototype.setColor = function (color) {
        this.color = color;
    };

    /**
     * Get the rect renderer parameter
     *
     * @method getRectColor
     * @returns {String} the rectangle color
     */
    RenderingParameters.prototype.getRectColor = function () {
        return this.rectColor;
    };

    /**
     * Set the rect renderer parameter
     *
     * @method setRectColor
     * @param {String} rectColor
     */
    RenderingParameters.prototype.setRectColor = function (rectColor) {
        this.rectColor = rectColor;
    };

    /**
     * Get the font renderer parameter
     *
     * @method getFont
     * @returns {String} The font
     */
    RenderingParameters.prototype.getFont = function () {
        return this.font;
    };

    /**
     * Set the font renderer parameter
     *
     * @method setFont
     * @param {String} font
     */
    RenderingParameters.prototype.setFont = function (font) {
        this.font = font;
    };

    /**
     * Get the decoration renderer parameter
     *
     * @method getDecoration
     * @returns {String} The decoration
     */
    RenderingParameters.prototype.getDecoration = function () {
        return this.decoration;
    };

    /**
     * Set the decoration renderer parameter
     *
     * @method setDecoration
     * @param {String} decoration
     */
    RenderingParameters.prototype.setDecoration = function (decoration) {
        this.decoration = decoration;
    };

    /**
     * Get the width renderer parameter
     *
     * @method getWidth
     * @returns {Number} The ink width
     */
    RenderingParameters.prototype.getWidth = function () {
        return this.width;
    };

    /**
     * Set the width renderer parameter
     *
     * @method setWidth
     * @param {Number} width
     */
    RenderingParameters.prototype.setWidth = function (width) {
        this.width = width;
    };

    /**
     * Get the pressure renderer parameter
     *
     * @method getPressureType
     * @returns {String} The pressure type
     */
    RenderingParameters.prototype.getPressureType = function () {
        return this.pressureType;
    };

    /**
     * Set the pressure renderer parameter
     *
     * @method setPressureType
     * @param {String} pressureType
     */
    RenderingParameters.prototype.setPressureType = function (pressureType) {
        this.pressureType = pressureType;
    };

    /**
     * Get the alpha renderer parameter
     *
     * @method getAlpha
     * @returns {String} The alpha
     */
    RenderingParameters.prototype.getAlpha = function () {
        return this.alpha;
    };

    /**
     * Set the alpha renderer parameter
     *
     * @method setAlpha
     * @param {String} alpha
     */
    RenderingParameters.prototype.setAlpha = function (alpha) {
        this.alpha = alpha;
    };

    // Export
    scope.RenderingParameters = RenderingParameters;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represent the Abstract Renderer. It's used to calculate the ink rendering in HTML5 canvas
     *
     * @class AbstractRenderer
     * @constructor
     */
    function AbstractRenderer() {
        this.points = [];
        this.drawing = false;
        this.showBoundingBoxes = false;
        this.parameters = new scope.RenderingParameters();
    }

    /**
     * Get parameters
     *
     * @method getParameters
     * @returns {RenderingParameters}
     */
    AbstractRenderer.prototype.getParameters = function () {
        return this.parameters;
    };

    /**
     * Set parameters
     *
     * @method setParameters
     * @param {RenderingParameters} parameters
     */
    AbstractRenderer.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
    };

    /**
     * This property is use to show or not show the bounding box
     *
     * @method getShowBoundingBoxes
     * @returns {Boolean}
     */
    AbstractRenderer.prototype.getShowBoundingBoxes = function () {
        return this.showBoundingBoxes;
    };

    /**
     * Set the show state of bounding box
     *
     * @method setShowBoundingBoxes
     * @param {Boolean} showBoundingBoxes
     */
    AbstractRenderer.prototype.setShowBoundingBoxes = function (showBoundingBoxes) {
        this.showBoundingBoxes = showBoundingBoxes;
    };

    /**
     * Draw recognition result on HTML5 canvas.
     *
     * @method drawRecognitionResult
     * @param {AbstractComponent[]} components
     * @param {Object} recognitionResult
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawRecognitionResult = function (components, recognitionResult, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw input components
     *
     * @method drawComponents
     * @param {AbstractComponent[]} components
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawComponents = function (components, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw component
     *
     * @method drawComponent
     * @param {AbstractComponent} component
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawComponent = function (component, context, parameters) {
        if (component instanceof scope.Stroke) {
            this.drawStroke(component, context, parameters);
        } else if (component instanceof scope.CharacterInputComponent) {
            this.drawCharacter(component, context, parameters);
        } else {
            throw new Error('Component not implemented: ' + component.getType());
        }
    };

    /**
     * Record the beginning of drawing
     *
     * @method drawStart
     * @param {Number} x
     * @param {Number} y
     */
    AbstractRenderer.prototype.drawStart = function (x, y) {
        this.points = [];
        this.drawing = true;
        this.points.push(new scope.QuadraticPoint({x: x, y: y}));
    };

    /**
     * Record the drawing
     *
     * @method drawContinue
     * @param {Number} x
     * @param {Number} y
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawContinue = function (x, y, context, parameters) {
        if (this.drawing) {
            var params = this.getParameters();
            if (parameters) {
                params = parameters;
            }

            var delta = 2 + (params.getWidth() / 4);
            var last = this.points[this.points.length - 1];

            if (Math.abs(last.getX() - x) >= delta || Math.abs(last.getY() - y) >= delta) {

                if (this.points.length === 1) { // firstPoint

                    var pA = this.points[this.points.length - 1]; // firstPoint
                    var pB = new scope.QuadraticPoint({x: x, y: y});
                    var pAB = new scope.QuadraticPoint({
                        x: 0.5 * (pA.getX() + pB.getX()),
                        y: 0.5 * (pA.getY() + pB.getY())
                    });
                    computePointParameters(pA, pAB, params.getPressureType());
                    computePointParameters(pAB, pB, params.getPressureType());

                    computeFirstControls(pA, pAB, params.getWidth());
                    computeControls(pAB, pB, params.getWidth());

                    this.points.push(pAB);
                    this.points.push(pB);

                    drawFirstSegment(pA, pAB, context, params);

                } else {
                    var pAB = this.points[this.points.length - 2]; // jshint ignore:line
                    var pB = this.points[this.points.length - 1]; // jshint ignore:line
                    var pC = new scope.QuadraticPoint({x: x, y: y});
                    var pBC = new scope.QuadraticPoint({
                        x: 0.5 * (pB.getX() + pC.getX()),
                        y: 0.5 * (pB.getY() + pC.getY())
                    });
                    computePointParameters(pB, pBC, params.getPressureType());
                    computePointParameters(pBC, pC, params.getPressureType());

                    computeControls(pB, pBC, params.getWidth());
                    computeControls(pBC, pC, params.getWidth());

                    this.points.push(pBC);
                    this.points.push(pC);

                    drawSegment(pAB, pB, pBC, context, params);
                }
            }
        }
    };

    /**
     * Stop record of drawing
     *
     * @method drawEnd
     * @param {Number} x
     * @param {Number} y
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawEnd = function (x, y, context, parameters) {
        if (this.drawing) {
            var params = this.getParameters();
            if (parameters) {
                params = parameters;
            }

            if (this.points.length === 1) {
                drawPoint(new scope.QuadraticPoint({x: x, y: y}), context, params);
            } else if (this.points.length > 1) {
                var pA = this.points[this.points.length - 1];
                var pB = new scope.QuadraticPoint({x: x, y: y});
                var pAB = new scope.QuadraticPoint({
                    x: 0.5 * (pA.getX() + pB.getX()),
                    y: 0.5 * (pA.getY() + pB.getY())
                });
                computePointParameters(pA, pAB, params.getPressureType());
                computePointParameters(pAB, pB, params.getPressureType());

                computeControls(pA, pAB, params.getWidth());
                computeLastControls(pB, params.getWidth());

                this.points.push(pAB);
                this.points.push(pB);

                drawLastSegment(pAB, pB, context, params);
            }
            this.drawing = false;
        }
    };

    /**
     * Clear the context's canvas content to erase drawing strokes
     *
     * @method clear
     * @param {Object} context
     */
    AbstractRenderer.prototype.clear = function (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };

    /**
     * Draw a rectangle on context
     *
     * @method drawRectangle
     * @param {Rectangle} rectangle
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawRectangle = function (rectangle, context, parameters) {

        context.save();
        try {
            var params = this.getParameters();
            if (parameters) {
                params = parameters;
            }
            context.fillStyle = params.getRectColor();
            context.strokeStyle = params.getColor();
            context.globalAlpha = params.getAlpha();
            context.lineWidth = 0.5 * params.getWidth();
            context.fillRect(rectangle.getX(), rectangle.getY(), rectangle.getWidth(), rectangle.getHeight());
        } finally {
            context.restore();
        }
    };

    /**
     * Draw strokes on context
     *
     * @method drawStrokes
     * @param {Stroke[]} strokes
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawStrokes = function (strokes, context, parameters) {
        for (var i in strokes) {
            this.drawStroke(strokes[i], context, parameters);
        }
    };

    /**
     * Draw a stroke on context
     *
     * @method drawStroke
     * @param {Stroke} stroke
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawStroke = function (stroke, context, parameters) {
        if (stroke.getLength() > 0) {
            this.drawStart(stroke.getX()[0], stroke.getY()[0]);
            for (var i = 0; i < stroke.getLength(); ++i) {
                this.drawContinue(stroke.getX()[i], stroke.getY()[i], context, parameters);
            }
            this.drawEnd(stroke.getX()[stroke.getLength() - 1], stroke.getY()[stroke.getLength() - 1], context, parameters);
        }
    };

    /**
     * Draw character
     *
     * @private
     * @method drawCharacter
     * @param {CharacterInputComponent} character
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AbstractRenderer.prototype.drawCharacter = function (character, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw point on context
     *
     * @private
     * @method drawPoint
     * @param {QuadraticPoint} point
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawPoint = function (point, context, parameters) {

        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = parameters.getAlpha();
            context.lineWidth = 1;

            context.beginPath();
            context.arc(point.getX(), point.getY(), 0.25 * parameters.getWidth(), 0, 2 * Math.PI);
            context.fill();
        } finally {
            context.restore();
        }

    };

    /**
     * Draw the first stroke segment on context
     *
     * @private
     * @method drawFirstSegment
     * @param {QuadraticPoint} pA
     * @param {QuadraticPoint} pB
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawFirstSegment = function (pA, pB, context, parameters) {

        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = 1;
            context.lineWidth = 1;

            context.beginPath();
            context.moveTo(pA.getP1().getX(), pA.getP1().getY());
            context.lineTo(pB.getP1().getX(), pB.getP1().getY());
            context.lineTo(pB.getP2().getX(), pB.getP2().getY());
            context.lineTo(pA.getP2().getX(), pA.getP2().getY());
            context.closePath();
            context.fill();

        } finally {
            context.restore();
        }

    };

    /**
     * Draw middle stroke segment on context
     *
     * @private
     * @method drawSegment
     * @param {QuadraticPoint} pA
     * @param {QuadraticPoint} pB
     * @param {QuadraticPoint} pC
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawSegment = function (pA, pB, pC, context, parameters) {

        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = 1;
            context.lineWidth = 1;

            context.beginPath();
            context.moveTo(pA.getP1().getX(), pA.getP1().getY());
            context.quadraticCurveTo(pB.getP1().getX(), pB.getP1().getY(), pC.getP1().getX(), pC.getP1().getY());
            context.lineTo(pC.getP2().getX(), pC.getP2().getY());
            context.quadraticCurveTo(pB.getP2().getX(), pB.getP2().getY(), pA.getP2().getX(), pA.getP2().getY());
            context.closePath();
            context.fill();

        } finally {
            context.restore();
        }
    };

    /**
     * Draw the last stroke segment on context
     *
     * @private
     * @method drawLastSegment
     * @param {QuadraticPoint} pA
     * @param {QuadraticPoint} pB
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawLastSegment = function (pA, pB, context, parameters) {

        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = 1;
            context.lineWidth = 1;

            context.beginPath();
            context.moveTo(pA.getP1().getX(), pA.getP1().getY());
            context.lineTo(pB.getP1().getX(), pB.getP1().getY());
            context.lineTo(pB.getP2().getX(), pB.getP2().getY());
            context.lineTo(pA.getP2().getX(), pA.getP2().getY());
            context.closePath();
            context.fill();

        } finally {
            context.restore();
        }
    };

    /**
     * Compute distance and unit vector from the previous point.
     *
     * @private
     * @method computeDistance
     * @param {QuadraticPoint} previous
     * @param {QuadraticPoint} point
     * @param {String} pressureType
     */
    var computePointParameters = function (previous, point, pressureType) {
        var dx = point.getX() - previous.getX(),
            dy = point.getY() - previous.getY(),
            d = Math.sqrt((dx * dx) + (dy * dy));

        if (d !== 0) {
            point.setDistance(d);
            point.setCos(dx / d);
            point.setSin(dy / d);
        }
        point.setLength(previous.getLength() + point.getDistance());

        switch (pressureType) {
            case 'SIMULATED':
                computePressure(point);
                break;
            case 'CONSTANT':
                point.setPressure(1.0);
                break;
            case 'REAL':
                // keep the current pressure
                break;
            default:
                throw new Error('Unknown pressure type');
        }
    };

    /**
     * Compute simulated pressure of given point.
     *
     * @private
     * @method computePressure
     * @param {QuadraticPoint} point
     */
    var computePressure = function (point) {
        var k, pressure;
        if (point.getDistance() < 10) {
            k = 0.2 + Math.pow(0.1 * point.getDistance(), 0.4);
        } else if (point.getDistance() > point.getLength() - 10) {
            k = 0.2 + Math.pow(0.1 * (point.getLength() - point.getDistance()), 0.4);
        } else {
            k = 1.0;
        }

        pressure = k * Math.max(0.1, 1.0 - 0.1 * Math.sqrt(point.getDistance()));
        if (isNaN(parseFloat(pressure))) {
            pressure = 0.5;
        }
        point.setPressure(pressure);
    };

    /**
     * Compute control points of the first point.
     *
     * @private
     * @method computeFirstControls
     * @param {QuadraticPoint} first First point of the list to be computed
     * @param {QuadraticPoint} next Next point
     * @param {Number} penWidth Pen width
     */
    var computeFirstControls = function (first, next, penWidth) {
        var r = 0.5 * (penWidth * first.getPressure()),
            nx = r * next.getSin(),
            ny = r * next.getCos();

        first.getP1().setX(first.getX() - nx);
        first.getP1().setY(first.getY() + ny);
        first.getP2().setX(first.getX() + nx);
        first.getP2().setY(first.getY() - ny);
    };

    /**
     * Compute control points between two points.
     *
     * @private
     * @method computeControls
     * @param {QuadraticPoint} point Point to be computed
     * @param {QuadraticPoint} next Next point
     * @param {Number} penWidth Pen width
     */
    var computeControls = function (point, next, penWidth) {
        var cos = point.getCos() + next.getCos(),
            sin = point.getSin() + next.getSin(),
            u = Math.sqrt((cos * cos) + (sin * sin));

        if (u !== 0) {
            // compute control points
            var r = 0.5 * penWidth * point.getPressure();
            var nx = -r * sin / u;
            var ny = r * cos / u;
            point.getP1().setX(point.getX() + nx);
            point.getP1().setY(point.getY() + ny);
            point.getP2().setX(point.getX() - nx);
            point.getP2().setY(point.getY() - ny);
        }
    };

    /**
     * Compute control points of the last point.
     *
     * @private
     * @method computeLastControls
     * @param {QuadraticPoint} last Last point to be computed
     * @param {Number} penWidth Pen width
     */
    var computeLastControls = function (last, penWidth) {
        var r = 0.5 * penWidth * last.getPressure(),
            nx = -r * last.getSin(),
            ny = r * last.getCos();

        last.getP1().setX(last.getX() + nx);
        last.getP1().setY(last.getY() + ny);
        last.getP2().setX(last.getX() - nx);
        last.getP2().setY(last.getY() - ny);
    };


    // Export
    scope.AbstractRenderer = AbstractRenderer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represent the Text Renderer. It's used to calculate the text ink rendering in HTML5 canvas
     *
     * @class TextRenderer
     * @extends AbstractRenderer
     * @constructor
     */
    function TextRenderer() {
        scope.AbstractRenderer.call(this);
    }

    /**
     * Inheritance property
     */
    TextRenderer.prototype = new scope.AbstractRenderer();

    /**
     * Constructor property
     */
    TextRenderer.prototype.constructor = TextRenderer;

    /**
     * Draw text recognition result on HTML5 canvas. Scratch out results are use to redraw HTML5 Canvas
     *
     * @method drawRecognitionResult
     * @param {TextInputUnit[]} inputUnits
     * @param {TextDocument} recognitionResult
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    TextRenderer.prototype.drawRecognitionResult = function (inputUnits, recognitionResult, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        this.drawInputUnits(inputUnits, context, params);
    };

    /**
     * Draw input units
     *
     * @method drawInputUnits
     * @param {TextInputUnit[]} inputUnits
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    TextRenderer.prototype.drawInputUnits = function (inputUnits, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        for (var i in inputUnits) {
            this.drawComponents(inputUnits[i].getComponents(), context, params);
        }
    };

    /**
     * Draw components
     *
     * @method drawComponents
     * @param {AbstractComponent[]} components
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    TextRenderer.prototype.drawComponents = function (components, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        for (var i in components) {
            var component = components[i];
            if (component instanceof scope.AbstractTextInputComponent) {
                this.drawTextComponent(component, context, params);
            } else if (component instanceof scope.AbstractComponent) {
                scope.AbstractRenderer.prototype.drawComponent.call(this, component, context, params); // super
            } else {
                throw new Error('not implemented');
            }
        }
    };

    /**
     * Draw text component
     *
     * @method drawTextComponent
     * @param {AbstractTextInputComponent} component
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    TextRenderer.prototype.drawTextComponent = function (component, context, parameters) {
        if (component instanceof scope.CharInputComponent) {
            drawChar(component, context, parameters);
        } else if (component instanceof scope.StringInputComponent) {
            drawString(component, context, parameters);
        } else {
            throw new Error('Component not implemented: ' + component.getType());
        }
    };

    /**
     * Draw char
     *
     * @private
     * @method drawChar
     * @param {CharInputComponent} char
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawChar = function (char, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw string
     *
     * @private
     * @method drawString
     * @param {StringInputComponent} string
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawString = function (string, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    // Export
    scope.TextRenderer = TextRenderer;
})(MyScript);

'use strict';

(function (scope) {
    /**
     * Represent the Shape Renderer. It's used to calculate the shape ink rendering in HTML5 canvas
     *
     * @class ShapeRenderer
     * @constructor
     */
    function ShapeRenderer() {
        scope.AbstractRenderer.call(this);
    }

    /**
     * Inheritance property
     */
    ShapeRenderer.prototype = new scope.AbstractRenderer();

    /**
     * Constructor property
     */
    ShapeRenderer.prototype.constructor = ShapeRenderer;

    /**
     * Draw shape recognition result on HTML5 canvas
     *
     * @method drawRecognitionResult
     * @param {AbstractComponent[]} components
     * @param {ShapeDocument} recognitionResult
     * @param {RenderingParameters} parameters
     * @param {Object} context
     */
    ShapeRenderer.prototype.drawRecognitionResult = function (components, recognitionResult, parameters, context) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        this.drawShapes(components, recognitionResult.getSegments(), params, context);
    };

    /**
     * Draw components
     *
     * @method drawComponents
     * @param {AbstractComponent[]} components
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawComponents = function (components, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        for (var i in components) {
            var component = components[i];
            if (component instanceof scope.AbstractShapePrimitive) {
                this.drawShapePrimitive(component, context, params);
            } else if (component instanceof scope.AbstractComponent) {
                scope.AbstractRenderer.prototype.drawComponent.call(this, component, context, params); // super
            } else {
                throw new Error('not implemented');
            }
        }
    };

    /**
     * Draw the shapes
     *
     * @method drawShapes
     * @param {AbstractComponent[]} components
     * @param {ShapeSegment[]} shapes
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawShapes = function (components, shapes, context, parameters) {
        for (var i in shapes) {
            this.drawShapeSegment(components, shapes[i], context, parameters);
        }
    };

    /**
     * Draw shape segment
     *
     * @method drawShapeSegment
     * @param {AbstractComponent[]} components
     * @param {ShapeSegment} segment
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawShapeSegment = function (components, segment, context, parameters) {
        var candidate = segment.getSelectedCandidate();
        if (candidate instanceof scope.ShapeRecognized) {
            this.drawShapeRecognized(candidate, context, parameters);
        } else if (candidate instanceof scope.ShapeNotRecognized) {
            this.drawShapeNotRecognized(components, segment.getInkRanges(), context, parameters);
        } else {
            throw new Error('not implemented');
        }
    };

    /**
     * This method allow you to draw recognized shape
     *
     * @method drawShapeRecognized
     * @param {ShapeRecognized} shapeRecognized
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawShapeRecognized = function (shapeRecognized, context, parameters) {
        this.drawComponents(shapeRecognized.getPrimitives(), context, parameters);
    };

    /**
     * This method allow you to draw not recognized shape
     *
     * @method drawShapeNotRecognized
     * @param {AbstractComponent[]} components
     * @param {ShapeInkRange[]} inkRanges
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawShapeNotRecognized = function (components, inkRanges, context, parameters) {
        var notRecognized = [];
        for (var i in inkRanges) {
            notRecognized.concat(this.extractStroke(components, inkRanges[i]));
        }
        this.drawComponents(notRecognized, context, parameters);
    };

    /**
     * Draw shape primitive
     *
     * @method drawShapePrimitive
     * @param {AbstractShapePrimitive} primitive
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawShapePrimitive = function (primitive, context, parameters) {
        if (primitive instanceof scope.ShapeEllipse) {
            this.drawShapeEllipse(primitive, context, parameters);
        } else if (primitive instanceof scope.ShapeLine) {
            this.drawShapeLine(primitive, context, parameters);
        } else {
            throw new Error('Primitive not implemented: ' + primitive.getType());
        }
    };

    /**
     * Draw shape line
     *
     * @method drawShapeLine
     * @param {ShapeLine} shapeLine
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawShapeLine = function (shapeLine, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }

        drawLine(shapeLine.getFirstPoint(), shapeLine.getLastPoint(), context, params);
        if (shapeLine.hasBeginDecoration() && shapeLine.getBeginDecoration() === 'ARROW_HEAD') {
            drawArrowHead(shapeLine.getFirstPoint(), shapeLine.getBeginTangentAngle(), 12.0, context, params);
        }
        if (shapeLine.hasEndDecoration() && shapeLine.getEndDecoration() === 'ARROW_HEAD') {
            drawArrowHead(shapeLine.getLastPoint(), shapeLine.getEndTangentAngle(), 12.0, context, params);
        }
    };

    /**
     * Draw shape ellipse
     *
     * @method drawShapeEllipse
     * @param {ShapeEllipse} shapeEllipse
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    ShapeRenderer.prototype.drawShapeEllipse = function (shapeEllipse, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }

        var points = drawEllipseArc(
            shapeEllipse.getCenter(),
            shapeEllipse.getMaxRadius(),
            shapeEllipse.getMinRadius(),
            shapeEllipse.getOrientation(),
            shapeEllipse.getStartAngle(),
            shapeEllipse.getSweepAngle(),
            context, params);

        if (shapeEllipse.hasBeginDecoration() && shapeEllipse.getBeginDecoration() === 'ARROW_HEAD') {
            drawArrowHead(points[0], shapeEllipse.getBeginTangentAngle(), 12.0, context, params);
        }
        if (shapeEllipse.hasEndDecoration() && shapeEllipse.getEndDecoration() === 'ARROW_HEAD') {
            drawArrowHead(points[1], shapeEllipse.getEndTangentAngle(), 12.0, context, params);
        }
    };

    /**
     * Draw an ellipse arc on context
     *
     * @private
     * @method drawEllipseArc
     * @param {Point} centerPoint
     * @param {Number} maxRadius
     * @param {Number} minRadius
     * @param {String} orientation
     * @param {Number} startAngle
     * @param {Number} sweepAngle
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     * @returns {Point[]}
     */
    var drawEllipseArc = function (centerPoint, maxRadius, minRadius, orientation, startAngle, sweepAngle, context, parameters) {

        var angleStep = 0.02; // angle delta between interpolated

        var z1 = Math.cos(orientation);
        var z3 = Math.sin(orientation);
        var z2 = z1;
        var z4 = z3;
        z1 *= maxRadius;
        z2 *= minRadius;
        z3 *= maxRadius;
        z4 *= minRadius;

        var n = Math.floor(Math.abs(sweepAngle) / angleStep);

        var boundariesPoints = [];

        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = parameters.getAlpha();
            context.lineWidth = 0.5 * parameters.getWidth();

            context.beginPath();

            for (var i = 0; i <= n; i++) {

                var angle = startAngle + (i / n) * sweepAngle; // points on the arc, in radian
                var alpha = Math.atan2(Math.sin(angle) / minRadius, Math.cos(angle) / maxRadius);

                var cosAlpha = Math.cos(alpha);
                var sinAlpha = Math.sin(alpha);

                // current point
                var x = centerPoint.x + z1 * cosAlpha - z4 * sinAlpha;
                var y = centerPoint.y + z2 * sinAlpha + z3 * cosAlpha;
                if (i === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }

                if (i === 0 || i === n) {
                    boundariesPoints.push(new scope.Point({x: x, y: y}));
                }
            }

            context.stroke();

        } finally {
            context.restore();
        }

        return boundariesPoints;
    };

    /**
     * Draw a line on context
     *
     * @private
     * @method drawLine
     * @param {Point} p1
     * @param {Point} p2
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawLine = function (p1, p2, context, parameters) {
        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = parameters.getAlpha();
            context.lineWidth = 0.5 * parameters.getWidth();

            context.beginPath();
            context.moveTo(p1.getX(), p1.getY());
            context.lineTo(p2.getX(), p2.getY());
            context.stroke();
        } finally {
            context.restore();
        }
    };

    /**
     * Clamp an angle into the range [-PI, +PI]
     *
     * @private
     * @method phi
     * @param {Number} angle
     * @returns {Number}
     */
    var phi = function (angle) {
        angle = ((angle + Math.PI) % (Math.PI * 2)) - Math.PI;
        if (angle < -Math.PI) {
            angle += Math.PI * 2;
        }
        return angle;
    };

    /**
     * Draw an arrow head on context
     *
     * @private
     * @method drawArrowHead
     * @param {Point} headPoint
     * @param {Number} angle
     * @param {Number} length
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawArrowHead = function (headPoint, angle, length, context, parameters) {
        var alpha = phi(angle + Math.PI - (Math.PI / 8)),
            beta = phi(angle - Math.PI + (Math.PI / 8));

        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = parameters.getAlpha();
            context.lineWidth = 0.5 * parameters.getWidth();

            context.moveTo(headPoint.getX(), headPoint.getY());
            context.beginPath();
            context.lineTo(headPoint.getX() + (length * Math.cos(alpha)), headPoint.getY() + (length * Math.sin(alpha)));
            context.lineTo(headPoint.getX() + (length * Math.cos(beta)), headPoint.getY() + (length * Math.sin(beta)));
            context.lineTo(headPoint.getX(), headPoint.getY());
            context.fill();

        } finally {
            context.restore();
        }

    };

    /**
     * Get strokes from shape inkRange
     *
     * @method extractStroke
     * @param {Stroke[]} strokes
     * @param {ShapeInkRange} inkRange
     * @result {Stroke[]} List of strokes from inkRange
     */
    ShapeRenderer.prototype.extractStroke = function (strokes, inkRange) {
        var result = [],
            firstPointIndex = Math.floor(inkRange.getFirstPoint()),
            lastPointIndex = Math.ceil(inkRange.getLastPoint());

        for (var strokeIndex = inkRange.getFirstStroke(); strokeIndex <= inkRange.getLastStroke(); strokeIndex++) {
            var currentStroke = strokes[strokeIndex - 1];
            var currentStrokePointCount = currentStroke.getX().length;

            var newStroke = new scope.Stroke(), x = [], y = [];

            for (var pointIndex = firstPointIndex; (strokeIndex === inkRange.getLastStroke() && pointIndex <= lastPointIndex && pointIndex < currentStrokePointCount) || (strokeIndex !== inkRange.getLastStroke() && pointIndex < currentStrokePointCount); pointIndex++) {
                x.push(currentStroke.getX()[pointIndex]);
                y.push(currentStroke.getY()[pointIndex]);
            }

            newStroke.setX(x);
            newStroke.setY(y);
            result.push(newStroke);
        }
        return result;
    };

    // Export
    scope.ShapeRenderer = ShapeRenderer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represent the Math Renderer. It's used to calculate the math ink rendering in HTML5 canvas
     *
     * @class MathRenderer
     * @extends AbstractRenderer
     * @constructor
     */
    function MathRenderer() {
        scope.AbstractRenderer.call(this);
    }

    /**
     * Inheritance property
     */
    MathRenderer.prototype = new scope.AbstractRenderer();

    /**
     * Constructor property
     */
    MathRenderer.prototype.constructor = MathRenderer;

    /**
     * Draw math recognition result on HTML5 canvas. Scratch out results are use to redraw HTML5 Canvas
     *
     * @method drawRecognitionResult
     * @param {AbstractComponent[]} components
     * @param {MathDocument} recognitionResult
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    MathRenderer.prototype.drawRecognitionResult = function (components, recognitionResult, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        var notScratchOutComponents = this.removeScratchOut(components, recognitionResult.getScratchOutResults());
        this.drawComponents(notScratchOutComponents, context, params);
    };

    /**
     * Draw components
     *
     * @method drawComponents
     * @param {AbstractComponent[]} components
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    MathRenderer.prototype.drawComponents = function (components, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        for (var i in components) {
            var component = components[i];
            if (component instanceof scope.AbstractComponent) {
                scope.AbstractRenderer.prototype.drawComponent.call(this, component, context, params); // super
            } else {
                throw new Error('not implemented');
            }
        }
    };

    /**
     * Remove scratch out from input components
     *
     * @param {AbstractComponent[]} components
     * @param {MathScratchOut[]} scratchOutResults
     * @returns {AbstractComponent[]} notScratchOutComponents
     */
    MathRenderer.prototype.removeScratchOut = function (components, scratchOutResults) {
        if (!scratchOutResults || scratchOutResults.length === 0) {
            return components;
        }

        var cloneComponents = components.slice(0);
        var componentsToRemove = [];

        for (var k in scratchOutResults) {
            if (scratchOutResults[k].getErasedInkRanges()) {
                for (var n in scratchOutResults[k].getErasedInkRanges()) {
                    componentsToRemove.push(scratchOutResults[k].getErasedInkRanges()[n].getComponent());
                }
                for (var p in scratchOutResults[k].getInkRanges()) {
                    componentsToRemove.push(scratchOutResults[k].getInkRanges()[p].getComponent());
                }
            }
        }

        componentsToRemove.sort(function (a, b) {
            return b - a;
        });

        for (var z in componentsToRemove) {
            cloneComponents.splice(componentsToRemove[z], 1);
        }
        return cloneComponents;
    };

    // Export
    scope.MathRenderer = MathRenderer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represent the Music Renderer. It's used to calculate the music ink rendering in HTML5 canvas
     *
     * @class MusicRenderer
     * @extends AbstractRenderer
     * @constructor
     */
    function MusicRenderer() {
        scope.AbstractRenderer.call(this);
    }

    /**
     * Inheritance property
     */
    MusicRenderer.prototype = new scope.AbstractRenderer();

    /**
     * Constructor property
     */
    MusicRenderer.prototype.constructor = MusicRenderer;

    /**
     * Draw music recognition result on HTML5 canvas. Scratch out results are use to redraw HTML5 Canvas
     *
     * @method drawRecognitionResult
     * @param {AbstractComponent[]} components
     * @param {MusicDocument} recognitionResult
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    MusicRenderer.prototype.drawRecognitionResult = function (components, recognitionResult, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        var notScratchOutComponents = this.removeScratchOut(components, recognitionResult.getScratchOutResults());
        this.drawComponents(notScratchOutComponents, context, params);
    };

    /**
     * Remove scratch out from input components
     *
     * @param {AbstractComponent[]} components
     * @param {MusicScratchOut[]} scratchOutResults
     * @returns {AbstractComponent[]} notScratchOutComponents
     */
    MusicRenderer.prototype.removeScratchOut = function (components, scratchOutResults) {
        if (!scratchOutResults || scratchOutResults.length === 0) {
            return components;
        }

        var cloneComponents = components.slice(0);
        var componentsToRemove = [];

        for (var k in scratchOutResults) {
            if (scratchOutResults[k].getErasedInputRanges()) {
                for (var n in scratchOutResults[k].getErasedInputRanges()) {
                    componentsToRemove.push(scratchOutResults[k].getErasedInputRanges()[n].getComponent());
                }
                for (var p in scratchOutResults[k].getInputRanges()) {
                    componentsToRemove.push(scratchOutResults[k].getInputRanges()[p].getComponent());
                }
            }
        }

        componentsToRemove.sort(function (a, b) {
            return b - a;
        });

        for (var z in componentsToRemove) {
            cloneComponents.splice(componentsToRemove[z], 1);
        }
        return cloneComponents;
    };

    /**
     * Draw staff on the HTML5 canvas
     *
     * @method staffDrawing
     * @param {MusicStaff} staff
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    MusicRenderer.prototype.drawStaff = function (staff, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters; // jshint ignore:line
        }

        var staffHeight = staff.getTop() + ((staff.getCount() - 1) * staff.getGap());
//            var staves = Math.floor(context.canvas.clientHeight / staff.height);
        var staves = 1;

        context.beginPath();

        // Drawing horizontal staff lines
        for (var i = 0; i < staves; i++) {
            var offset = staffHeight * i;
            for (var j = 0; j < staff.getCount(); j++) {
                context.moveTo(0, (staff.getTop() + offset) + j * staff.getGap());
                context.lineTo(context.canvas.clientWidth, (staff.getTop() + offset) + j * staff.getGap());
            }
        }

        context.stroke();
    };

    /**
     * Draw components
     *
     * @method drawComponents
     * @param {AbstractComponent[]} components
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    MusicRenderer.prototype.drawComponents = function (components, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        for (var i in components) {
            var component = components[i];
            if (component instanceof scope.AbstractMusicInputComponent) {
                this.drawMusicNode(component, context, params);
            } else if (component instanceof scope.AbstractComponent) {
                scope.AbstractRenderer.prototype.drawComponent.call(this, component, context, params); // super
            } else {
                throw new Error('not implemented');
            }
        }
    };

    /**
     * Draw music node
     *
     * @method drawMusicNode
     * @param {AbstractMusicInputComponent} component
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    MusicRenderer.prototype.drawMusicNode = function (component, context, parameters) {
        if (component instanceof scope.MusicAccidentalInputComponent) {
            drawAccidental(component, context, parameters);
        } else if (component instanceof scope.MusicArpeggiateInputComponent) {
            drawArpeggiate(component, context, parameters);
        } else if (component instanceof scope.MusicBarInputComponent) {
            drawBar(component, context, parameters);
        } else if (component instanceof scope.MusicBeamInputComponent) {
            drawBeam(component, context, parameters);
        } else if (component instanceof scope.MusicClefInputComponent) {
            drawClef(component, context, parameters);
        } else if (component instanceof scope.MusicDecorationInputComponent) {
            drawDecoration(component, context, parameters);
        } else if (component instanceof scope.MusicDotsInputComponent) {
            drawDots(component, context, parameters);
        } else if (component instanceof scope.MusicHeadInputComponent) {
            drawHead(component, context, parameters);
        } else if (component instanceof scope.MusicLedgerLineInputComponent) {
            drawLedgerLine(component, context, parameters);
        } else if (component instanceof scope.MusicRestInputComponent) {
            drawRest(component, context, parameters);
        } else if (component instanceof scope.MusicStemInputComponent) {
            drawStem(component, context, parameters);
        } else if (component instanceof scope.MusicTieOrSlurInputComponent) {
            drawTieOrSlur(component, context, parameters);
        } else if (component instanceof scope.MusicTimeSignatureInputComponent) {
            drawTimeSignature(component, context, parameters);
        } else {
            throw new Error('Node not implemented: ' + component.getType());
        }
    };

    /**
     * Draw accidental
     *
     * @private
     * @method drawAccidental
     * @param {MusicAccidentalInputComponent} accidental
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawAccidental = function (accidental, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw arpeggiate
     *
     * @private
     * @method drawArpeggiate
     * @param {MusicArpeggiateInputComponent} arpeggiate
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawArpeggiate = function (arpeggiate, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw bar
     *
     * @private
     * @method drawBar
     * @param {MusicBarInputComponent} bar
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawBar = function (bar, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw beam
     *
     * @private
     * @method drawBeam
     * @param {MusicBeamInputComponent} beam
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawBeam = function (beam, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw clef
     *
     * @private
     * @method drawClef
     * @param {MusicClefInputComponent} clef
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawClef = function (clef, context, parameters) { // jshint ignore:line
        var src = 'data:image/svg+xml,';
        switch (clef.getValue().getSymbol()) {
            case 'F':
                src = src + '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" x="0" y="0" width="18" height="20"><defs/><g transform="translate(6.600000e-3,3.125356e-3)"><g><path d="M17.3 3.1 C17.3 3.5 17.1 3.8 16.8 4.1 C16.5 4.4 15.9 4.5 15.5 4.3 C15 4.1 14.7 3.7 14.7 3.2 C14.6 2.8 14.8 2.5 15 2.2 C15.3 1.9 15.7 1.8 16 1.8 C16.4 1.8 16.8 2 17 2.3 C17.2 2.5 17.3 2.8 17.3 3.1 z"/></g><g><path d="M17.3 8.9 C17.3 9.3 17.1 9.7 16.8 9.9 C16.5 10.3 15.9 10.3 15.5 10.2 C15 10 14.7 9.5 14.7 9.1 C14.6 8.7 14.8 8.3 15 8 C15.3 7.8 15.7 7.6 16 7.6 C16.5 7.7 17 8 17.2 8.4 C17.2 8.6 17.3 8.8 17.3 8.9 z"/></g><g><path d="M13 7.2 C13 10 11.8 12.7 9.8 14.7 C7.3 17.2 4 18.8 0.7 19.8 C0.3 20.1 -0.4 19.8 0.3 19.4 C1.6 18.8 3 18.3 4.2 17.5 C7 15.8 9.3 13.1 9.8 9.9 C10.1 8 10.1 5.9 9.6 4 C9.2 2.6 8.2 1.1 6.7 0.9 C5.3 0.7 3.7 1.2 2.7 2.2 C2.5 2.4 2 3.2 2 4 C2.6 3.6 2.6 3.6 3.1 3.4 C4.2 2.9 5.7 3.6 6 4.9 C6.3 6 6.1 7.5 5 8.1 C3.8 8.7 2 8.5 1.4 7.2 C0.3 5.3 0.9 2.6 2.6 1.2 C4.4 -0.3 7.1 -0.3 9.2 0.4 C11.4 1.3 12.7 3.5 12.9 5.8 C13 6.2 13 6.7 13 7.2 z"/></g></g></svg>';
                break;
            case 'C':
                src = src + '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="18" height="25"><defs/><g><g transform="matrix(1,0,0,1.030698,-309.364,-543.8647)"><path d="M 325.9 546.8 C 325.8 548.7 324.7 550.7 322.8 551.5 C 321.1 552.1 319.1 552.2 317.6 551 C 316.6 550.2 316.2 548.4 317.3 547.5 C 318.3 546.5 320.4 547.4 320.3 548.9 C 320.7 549.9 318.5 550.5 319.7 551.3 C 321 551.6 322.3 550.5 322.6 549.3 C 323.1 547.5 323.1 545.6 322.7 543.8 C 322.4 542.9 321.9 541.5 320.7 541.9 C 319.2 542.2 318.3 543.8 317.9 545.1 C 317.6 543.2 316.4 541.5 315 540.2 C 315 544.1 315 548 315 551.9 L 314.1 551.9 C 314.1 543.9 314.1 535.7 314.1 527.7 L 315 527.7 C 315 531.5 315 535.5 315 539.4 C 316.4 538.1 317.6 536.4 317.8 534.5 C 318.3 535.9 319.3 537.5 321 537.8 C 322.2 537.8 322.5 536.3 322.8 535.4 C 323.1 533.7 323.1 531.8 322.6 530.1 C 322.2 529 320.9 528 319.6 528.3 C 318.6 529 320.6 529.6 320.3 530.6 C 320.5 532 318.8 533 317.6 532.3 C 316.3 531.6 316.4 529.7 317.4 528.8 C 318 528.1 319.3 527.7 320.3 527.7 C 321.2 527.7 321.8 527.7 322.6 528 C 324.6 528.7 325.7 530.7 325.9 532.7 C 326.2 534.9 324.9 537.3 322.8 538.2 C 321.5 538.7 319.9 538.3 318.8 537.3 C 318.7 538.3 318.2 539.2 317.7 539.9 C 318.1 540.6 318.6 541.8 318.8 542.1 C 320.1 540.9 322.5 540.8 323.8 542 C 325.2 543.1 326.1 545 325.9 546.8 z "/></g><g transform="matrix(1,0,0,1.030928,-309.364,-543.9805)"><path d="M 312.2 551.9 L 309.4 551.9 L 309.4 527.7 L 312.2 527.7 L 312.2 551.9 z "/></g></g></svg>';
                break;
            case 'G':
                src = src + '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="15" height="40"><defs/><path d="m 12 3.4 c 0.3 3.1 -2 5.6 -4.1 7.6 -0.9 0.9 -0.2 0.1 -0.6 0.6 -0.1 -0.5 -0.3 -1.7 -0.3 -2.1 0.1 -2.6 2.3 -6.5 4.2 -7.9 0.3 0.6 0.6 0.6 0.8 1.8 z m 0.7 15.9 c -1.2 -0.9 -2.8 -1.1 -4.3 -0.9 -0.2 -1.2 -0.4 -2.5 -0.6 -3.7 2.4 -2.3 4.9 -4.9 5 -8.4 0.1 -2.2 -0.3 -4.6 -1.7 -6.4 C 9.5 0.1 8.3 2.1 7.4 3.3 c -1.5 2.6 -1.1 5.8 -0.6 8.6 -0.8 0.9 -1.9 1.7 -2.7 2.7 -2.4 2.3 -4.4 5.3 -4 8.7 0.2 3.3 2.6 6.3 5.9 7.1 1.2 0.3 2.6 0.3 3.8 0.1 0.2 2.2 1 4.5 0.1 6.7 -0.7 1.6 -2.8 2.9 -4.3 2.2 -0.6 -0.3 -0.1 -0.1 -0.5 -0.2 1.1 -0.3 2 -1 2.3 -1.5 0.8 -1.4 -0.4 -3.6 -2.2 -3.3 -2.3 0 -3.2 3.1 -1.7 4.6 1.3 1.5 3.8 1.3 5.4 0.3 1.8 -1.2 2 -3.5 1.8 -5.5 -0.1 -0.7 -0.4 -2.6 -0.4 -3.3 0.7 -0.2 0.2 -0.1 1.2 -0.4 2.7 -1 4.4 -4.2 3.6 -7 -0.3 -1.4 -1 -2.9 -2.3 -3.7 z m 0.6 5.7 c 0.2 2 -1.1 4.2 -3.1 4.9 -0.1 -0.8 -0.2 -1 -0.3 -1.4 -0.5 -2.4 -0.7 -4.9 -1.1 -7.3 1.6 -0.2 3.5 0.5 4 2.1 0.2 0.6 0.3 1.2 0.4 1.8 z m -5.1 5.1 c -2.5 0.1 -5 -1.6 -5.6 -4 -0.7 -2.1 -0.5 -4.5 0.8 -6.4 1.1 -1.7 2.6 -3 4 -4.5 0.2 1.1 0.4 2.2 0.5 3.3 -3 0.8 -5 4.6 -3.2 7.3 0.5 0.8 2 2.2 2.8 1.6 -1.1 -0.7 -2 -1.8 -1.8 -3.2 -0.1 -1.3 1.4 -2.9 2.7 -3.1 0.4 2.8 0.9 6 1.4 8.8 -0.5 0.1 -1 0.1 -1.5 0.1 z"/></svg>';
                break;
            default:
                throw new Error('Unknown music clef symbol');
        }

        var imageObj = new Image();
        imageObj.onload = function () {
            var ratio = clef.getBoundingBox().getHeight() / this.height;
            clef.getBoundingBox().setWidth(this.width * ratio);
            context.drawImage(imageObj, clef.getBoundingBox().getX(), clef.getBoundingBox().getY(), clef.getBoundingBox().getWidth(), clef.getBoundingBox().getHeight());
        };
        imageObj.src = src;
    };

    /**
     * Draw decoration
     *
     * @private
     * @method drawDecoration
     * @param {MusicDecorationInputComponent} decoration
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawDecoration = function (decoration, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw dots
     *
     * @private
     * @method drawDots
     * @param {MusicDotsInputComponent} dots
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawDots = function (dots, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw head
     *
     * @private
     * @method drawHead
     * @param {MusicHeadInputComponent} head
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawHead = function (head, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw ledgerLine
     *
     * @private
     * @method drawLedgerLine
     * @param {MusicLedgerLineInputComponent} ledgerLine
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawLedgerLine = function (ledgerLine, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw rest
     *
     * @private
     * @method drawRest
     * @param {MusicRestInputComponent} rest
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawRest = function (rest, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw stem
     *
     * @private
     * @method drawStem
     * @param {MusicStemInputComponent} stem
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawStem = function (stem, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw tieOrSlur
     *
     * @private
     * @method drawTieOrSlur
     * @param {MusicTieOrSlurInputComponent} tieOrSlur
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawTieOrSlur = function (tieOrSlur, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw timeSignature
     *
     * @private
     * @method drawTimeSignature
     * @param {MusicTimeSignatureInputComponent} timeSignature
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawTimeSignature = function (timeSignature, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    // Export
    scope.MusicRenderer = MusicRenderer;
})(MyScript);
'use strict';

(function (scope) {
    /**
     * Represent the Analyzer Renderer. It's used to calculate the analyzer ink rendering in HTML5 canvas
     *
     * @class AnalyzerRenderer
     * @extends AbstractRenderer
     * @constructor
     */
    function AnalyzerRenderer() {
        scope.AbstractRenderer.call(this);
        this.shapeRenderer = new scope.ShapeRenderer();
    }

    /**
     * Inheritance property
     */
    AnalyzerRenderer.prototype = new scope.AbstractRenderer();

    /**
     * Constructor property
     */
    AnalyzerRenderer.prototype.constructor = AnalyzerRenderer;

    /**
     * Get shape renderer
     *
     * @method getShapeRenderer
     * @returns {ShapeRenderer}
     */
    AnalyzerRenderer.prototype.getShapeRenderer = function () {
        return this.shapeRenderer;
    };

    /**
     * Set shape renderer
     *
     * @method setShapeRenderer
     * @param {ShapeRenderer} shapeRenderer
     */
    AnalyzerRenderer.prototype.setShapeRenderer = function (shapeRenderer) {
        this.shapeRenderer = shapeRenderer;
    };

    /**
     * Draw shape recognition result on HTML5 canvas
     *
     * @method drawRecognitionResult
     * @param {AbstractComponent[]} components
     * @param {AnalyzerDocument} recognitionResult
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawRecognitionResult = function (components, recognitionResult, context, parameters) {
        this.shapeRenderer.drawShapes(components, recognitionResult.getShapes(), context, parameters);
        this.drawTables(components, recognitionResult.getTables(), context, parameters);
        this.drawTextLines(components, recognitionResult.getTextLines(), context, parameters);
//        this.drawGroups(strokes, recognitionResult.getGroups(), context, parameters); // TODO: not implemented
    };

    /**
     * Draw components
     *
     * @method drawComponents
     * @param {AbstractComponent[]} components
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawComponents = function (components, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        for (var i in components) {
            var component = components[i];
            if (component instanceof scope.AbstractShapePrimitive) {
                this.shapeRenderer.drawShapePrimitive(component, context, params);
            } else if (component instanceof scope.AbstractComponent) {
                scope.AbstractRenderer.prototype.drawComponent.call(this, component, context, params); // super
            } else {
                throw new Error('not implemented');
            }
        }
    };

    /**
     * Draw table
     *
     * @method drawTables
     * @param {AbstractComponent[]} components
     * @param {AnalyzerTable[]} tables
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawTables = function (components, tables, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        for (var i in tables) {
            if (this.getShowBoundingBoxes()) {
                for (var j in tables[i].getCells()) {
                    this.drawCell(tables[i].getCells()[j], context, params);
                }
            }
            for (var k in tables[i].getLines()) {
                var data = tables[i].getLines()[k].getData();
                drawLine(data.getP1(), data.getP2(), context, params);
            }
        }
    };

    /**
     * Draw the text line
     *
     * @method drawTextLines
     * @param {AbstractComponent[]} components
     * @param {AnalyzerTextLine[]} textLines
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawTextLines = function (components, textLines, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }

        for (var i in textLines) {
            var textLine = textLines[i];
            var data = textLine.getData();
            if (data) {
                if (this.getShowBoundingBoxes()) {
                    this.drawRectangle(data.getBoundingBox(), context, params);
                }

                var text = textLine.getTextDocument().getTextSegment().getSelectedCandidate().getLabel();
                this.drawText(data.getBoundingBox(), text, data.getJustificationType(), data.getTextHeight(), data.getBaselinePos(), context, params);

                var underlines = textLine.getUnderlineList();
                for (var j in underlines) {
                    this.drawUnderline(data.getBoundingBox(), underlines[j], text, data.getTextHeight(), data.getBaselinePos() + data.getTextHeight() / 10, context, params);
                }
            }
        }
    };

    /**
     * Draw text on analyser
     *
     * @method drawText
     * @param {Rectangle} boundingBox
     * @param {String} text
     * @param {String} justificationType
     * @param {Number} textHeight
     * @param {Number} baseline
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawText = function (boundingBox, text, justificationType, textHeight, baseline, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }

        context.save();
        try {
            context.fillStyle = params.getColor();
            context.strokeStyle = params.getColor();
            context.globalAlpha = params.getAlpha();
            context.lineWidth = 0.5 * params.getWidth();
            context.font = params.getDecoration() + textHeight + 'px ' + params.getFont();
            context.textAlign = (justificationType === 'CENTER') ? 'center' : 'left';

            context.fillText(text, boundingBox.getX(), baseline, boundingBox.getWidth());

        } finally {
            context.restore();
        }
    };

    /**
     * Draw Underline
     *
     * @method drawUnderline
     * @param {Rectangle} boundingBox
     * @param {AnalyzerUnderline} underline
     * @param {String} text
     * @param {Number} textHeight
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawUnderline = function (boundingBox, underline, text, textHeight, baseline, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        var topLeft = boundingBox.getTopLeftPoint();
        var firstCharacter = underline.getData().getFirstCharacter();
        var lastCharacter = underline.getData().getLastCharacter();

        context.font = params.getDecoration() + textHeight + 'px ' + params.getFont();

        var textMetrics = context.measureText(text.substring(0, firstCharacter));
        var x1 = topLeft.x + textMetrics.width;

        textMetrics = context.measureText(text.substring(firstCharacter, lastCharacter + 1));
        var x2 = x1 + textMetrics.width;
        drawLine(new scope.Point({x: x1, y: baseline}), new scope.Point({x: x2, y: baseline}), context, params);
    };

    /**
     * Draw Groups
     *
     * @method drawGroups
     * @param {AbstractComponent[]} components
     * @param {AnalyzerGroup[]} groups
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawGroups = function (components, groups, context, parameters) { // jshint ignore:line
        throw new Error('not implemented');
    };

    /**
     * Draw a cell
     *
     * @method drawCell
     * @param {AnalyzerCell} cell
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    AnalyzerRenderer.prototype.drawCell = function (cell, context, parameters) {
        var params = this.getParameters();
        if (parameters) {
            params = parameters;
        }
        if (cell.getData()) {
            this.drawRectangle(cell.getData().getBoundingBox(), context, params);
        }
    };

    /**
     * Draw a line on context
     *
     * @private
     * @method drawLine
     * @param {Point} p1
     * @param {Point} p2
     * @param {Object} context
     * @param {RenderingParameters} [parameters]
     */
    var drawLine = function (p1, p2, context, parameters) {
        context.save();
        try {
            context.fillStyle = parameters.getColor();
            context.strokeStyle = parameters.getColor();
            context.globalAlpha = parameters.getAlpha();
            context.lineWidth = 0.5 * parameters.getWidth();

            context.beginPath();
            context.moveTo(p1.getX(), p1.getY());
            context.lineTo(p2.getX(), p2.getY());
            context.stroke();
        } finally {
            context.restore();
        }
    };

    // Export
    scope.AnalyzerRenderer = AnalyzerRenderer;
})(MyScript);
//# sourceMappingURL=myscript.js.map