// BEGIN
export function Point (x, y) {
    this.getX = () => x;
    this.getY = () => y;
}

export function Segment (beginPoint, endPoint) {
    this.getBeginPoint = () => beginPoint;
    this.getEndPoint = () => endPoint;
}

export const reverse = (segment) => {
    const start = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
    const finish = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());


    return new Segment(start, finish);
}


// END
