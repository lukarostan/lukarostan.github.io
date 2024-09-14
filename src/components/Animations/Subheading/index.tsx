import {useEffect} from 'react';
import anime from 'animejs/lib/anime.es';

export default function Subheading() {

    useEffect(() => {
        anime({
            targets: '.subheading-anim path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function (el, i) {
                return i * 50;
            },
            direction: 'normal',
            loop: false
        });
    }, []);

    return (<>
        <svg className="subheading-anim" width="1367.12" height="40.04" viewBox="0 0 1367.12 40.04" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000"
               stroke-width="0.25mm" fill="none" style={{stroke:'#ffffff', strokeWidth:'0.5mm', fill:'none'}}>
                <path
                    d="M 15.24 30.84 L 10.48 30.84 L 0 2.04 L 6.6 2.04 L 12.88 19.2 L 19.16 2.04 L 24.88 2.04 L 31.2 19.2 L 37.48 2.04 L 44.04 2.04 L 33.56 30.84 L 28.8 30.84 L 22 12.32 L 15.24 30.84 Z"
                    id="0" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 44.6 25.04 L 44.6 13.44 Q 44.6 11.88 45.4 10.56 Q 46.2 9.24 47.52 8.44 Q 48.84 7.64 50.4 7.64 L 62.32 7.64 Q 63.92 7.64 65.24 8.44 Q 66.56 9.24 67.34 10.56 Q 68.12 11.88 68.12 13.44 L 68.12 22.32 L 50.72 22.32 L 50.72 24.72 L 68.12 24.72 L 68.12 30.84 L 50.4 30.84 Q 48.84 30.84 47.52 30.04 Q 46.2 29.24 45.4 27.92 Q 44.6 26.6 44.6 25.04 Z M 50.72 13.76 L 50.72 16.96 L 62 16.96 L 62 13.76 L 50.72 13.76 Z"
                    id="1" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 71.28 25.04 L 71.28 0 L 77.44 0 L 77.44 24.72 L 82.12 24.72 L 82.12 30.84 L 77.08 30.84 Q 75.52 30.84 74.2 30.04 Q 72.88 29.24 72.08 27.92 Q 71.28 26.6 71.28 25.04 Z"
                    id="2" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 85.16 25.04 L 85.16 0 L 91.32 0 L 91.32 24.72 L 96 24.72 L 96 30.84 L 90.96 30.84 Q 89.4 30.84 88.08 30.04 Q 86.76 29.24 85.96 27.92 Q 85.16 26.6 85.16 25.04 Z"
                    id="3" vector-effect="non-scaling-stroke"/>
                <path d="M 115.6 22.08 L 98.92 22.08 L 98.92 15.96 L 115.6 15.96 L 115.6 22.08 Z" id="4"
                      vector-effect="non-scaling-stroke"/>
                <path
                    d="M 125.44 30.84 L 119.32 30.84 L 119.32 13.44 Q 119.32 11.88 120.12 10.56 Q 120.92 9.24 122.24 8.44 Q 123.56 7.64 125.16 7.64 L 137.96 7.64 L 137.96 13.76 L 125.44 13.76 L 125.44 30.84 Z"
                    id="5" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 140.52 25.04 L 140.52 13.44 Q 140.52 11.88 141.32 10.56 Q 142.12 9.24 143.44 8.44 Q 144.76 7.64 146.32 7.64 L 158.24 7.64 Q 159.84 7.64 161.16 8.44 Q 162.48 9.24 163.26 10.56 Q 164.04 11.88 164.04 13.44 L 164.04 25.04 Q 164.04 26.6 163.26 27.92 Q 162.48 29.24 161.16 30.04 Q 159.84 30.84 158.24 30.84 L 146.32 30.84 Q 144.76 30.84 143.44 30.04 Q 142.12 29.24 141.32 27.92 Q 140.52 26.6 140.52 25.04 Z M 146.64 24.72 L 157.92 24.72 L 157.92 13.76 L 146.64 13.76 L 146.64 24.72 Z"
                    id="6" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 167.2 25.04 L 167.2 7.64 L 173.32 7.64 L 173.32 24.72 L 184.6 24.72 L 184.6 7.64 L 190.72 7.64 L 190.72 25.04 Q 190.72 26.6 189.94 27.92 Q 189.16 29.24 187.84 30.04 Q 186.52 30.84 184.92 30.84 L 173 30.84 Q 171.4 30.84 170.08 30.04 Q 168.76 29.24 167.98 27.92 Q 167.2 26.6 167.2 25.04 Z"
                    id="7" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 201.16 30.84 L 195.04 30.84 L 195.04 7.64 L 212.76 7.64 Q 214.36 7.64 215.68 8.44 Q 217 9.24 217.78 10.56 Q 218.56 11.88 218.56 13.44 L 218.56 30.84 L 212.44 30.84 L 212.44 13.76 L 201.16 13.76 L 201.16 30.84 Z"
                    id="8" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 221.64 25.04 L 221.64 13.44 Q 221.64 11.88 222.42 10.56 Q 223.2 9.24 224.52 8.44 Q 225.84 7.64 227.44 7.64 L 239.08 7.64 L 239.08 0.04 L 245.2 0.04 L 245.2 30.84 L 227.44 30.84 Q 225.84 30.84 224.52 30.04 Q 223.2 29.24 222.42 27.92 Q 221.64 26.6 221.64 25.04 Z M 227.8 24.72 L 239.08 24.72 L 239.08 13.76 L 227.8 13.76 L 227.8 24.72 Z"
                    id="9" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 248.52 25.04 L 248.52 13.44 Q 248.52 11.88 249.32 10.56 Q 250.12 9.24 251.44 8.44 Q 252.76 7.64 254.32 7.64 L 266.24 7.64 Q 267.84 7.64 269.16 8.44 Q 270.48 9.24 271.26 10.56 Q 272.04 11.88 272.04 13.44 L 272.04 22.32 L 254.64 22.32 L 254.64 24.72 L 272.04 24.72 L 272.04 30.84 L 254.32 30.84 Q 252.76 30.84 251.44 30.04 Q 250.12 29.24 249.32 27.92 Q 248.52 26.6 248.52 25.04 Z M 254.64 13.76 L 254.64 16.96 L 265.92 16.96 L 265.92 13.76 L 254.64 13.76 Z"
                    id="10" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 275.08 25.04 L 275.08 13.44 Q 275.08 11.88 275.86 10.56 Q 276.64 9.24 277.96 8.44 Q 279.28 7.64 280.88 7.64 L 292.52 7.64 L 292.52 0.04 L 298.64 0.04 L 298.64 30.84 L 280.88 30.84 Q 279.28 30.84 277.96 30.04 Q 276.64 29.24 275.86 27.92 Q 275.08 26.6 275.08 25.04 Z M 281.24 24.72 L 292.52 24.72 L 292.52 13.76 L 281.24 13.76 L 281.24 24.72 Z"
                    id="11" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 322.32 30.84 L 316.04 30.84 L 316.04 2.04 L 342.64 2.04 L 342.64 8.28 L 322.32 8.28 L 322.32 13.32 L 338.68 13.32 L 338.68 19.56 L 322.32 19.56 L 322.32 30.84 Z"
                    id="13" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 350.84 30.84 L 344.72 30.84 L 344.72 13.44 Q 344.72 11.88 345.52 10.56 Q 346.32 9.24 347.64 8.44 Q 348.96 7.64 350.56 7.64 L 363.36 7.64 L 363.36 13.76 L 350.84 13.76 L 350.84 30.84 Z"
                    id="14" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 365.92 25.04 L 365.92 13.44 Q 365.92 11.88 366.72 10.56 Q 367.52 9.24 368.84 8.44 Q 370.16 7.64 371.72 7.64 L 383.64 7.64 Q 385.24 7.64 386.56 8.44 Q 387.88 9.24 388.66 10.56 Q 389.44 11.88 389.44 13.44 L 389.44 25.04 Q 389.44 26.6 388.66 27.92 Q 387.88 29.24 386.56 30.04 Q 385.24 30.84 383.64 30.84 L 371.72 30.84 Q 370.16 30.84 368.84 30.04 Q 367.52 29.24 366.72 27.92 Q 365.92 26.6 365.92 25.04 Z M 372.04 24.72 L 383.32 24.72 L 383.32 13.76 L 372.04 13.76 L 372.04 24.72 Z"
                    id="15" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 398.68 30.84 L 392.56 30.84 L 392.56 7.64 L 410.28 7.64 Q 411.88 7.64 413.2 8.44 Q 414.52 9.24 415.3 10.56 Q 416.08 11.88 416.08 13.44 L 416.08 30.84 L 409.96 30.84 L 409.96 13.76 L 398.68 13.76 L 398.68 30.84 Z"
                    id="16" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 420.36 25.04 L 420.36 0.76 L 426.48 0.76 L 426.48 7.64 L 435.08 7.64 L 435.08 13.76 L 426.48 13.76 L 426.48 24.72 L 435.08 24.72 L 435.08 30.84 L 426.2 30.84 Q 424.6 30.84 423.28 30.04 Q 421.96 29.24 421.16 27.92 Q 420.36 26.6 420.36 25.04 Z"
                    id="17" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 438.32 25.04 L 438.32 13.44 Q 438.32 11.88 439.12 10.56 Q 439.92 9.24 441.24 8.44 Q 442.56 7.64 444.12 7.64 L 456.04 7.64 Q 457.64 7.64 458.96 8.44 Q 460.28 9.24 461.06 10.56 Q 461.84 11.88 461.84 13.44 L 461.84 22.32 L 444.44 22.32 L 444.44 24.72 L 461.84 24.72 L 461.84 30.84 L 444.12 30.84 Q 442.56 30.84 441.24 30.04 Q 439.92 29.24 439.12 27.92 Q 438.32 26.6 438.32 25.04 Z M 444.44 13.76 L 444.44 16.96 L 455.72 16.96 L 455.72 13.76 L 444.44 13.76 Z"
                    id="18" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 472.24 30.84 L 466.12 30.84 L 466.12 7.64 L 483.84 7.64 Q 485.44 7.64 486.76 8.44 Q 488.08 9.24 488.86 10.56 Q 489.64 11.88 489.64 13.44 L 489.64 30.84 L 483.52 30.84 L 483.52 13.76 L 472.24 13.76 L 472.24 30.84 Z"
                    id="19" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 492.72 25.04 L 492.72 13.44 Q 492.72 11.88 493.5 10.56 Q 494.28 9.24 495.6 8.44 Q 496.92 7.64 498.52 7.64 L 510.16 7.64 L 510.16 0.04 L 516.28 0.04 L 516.28 30.84 L 498.52 30.84 Q 496.92 30.84 495.6 30.04 Q 494.28 29.24 493.5 27.92 Q 492.72 26.6 492.72 25.04 Z M 498.88 24.72 L 510.16 24.72 L 510.16 13.76 L 498.88 13.76 L 498.88 24.72 Z"
                    id="20" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 532.28 25.04 L 532.28 13.44 Q 532.28 11.88 533.06 10.56 Q 533.84 9.24 535.16 8.44 Q 536.48 7.64 538.08 7.64 L 549.72 7.64 L 549.72 0.04 L 555.84 0.04 L 555.84 30.84 L 538.08 30.84 Q 536.48 30.84 535.16 30.04 Q 533.84 29.24 533.06 27.92 Q 532.28 26.6 532.28 25.04 Z M 538.44 24.72 L 549.72 24.72 L 549.72 13.76 L 538.44 13.76 L 538.44 24.72 Z"
                    id="22" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 559.16 25.04 L 559.16 13.44 Q 559.16 11.88 559.96 10.56 Q 560.76 9.24 562.08 8.44 Q 563.4 7.64 564.96 7.64 L 576.88 7.64 Q 578.48 7.64 579.8 8.44 Q 581.12 9.24 581.9 10.56 Q 582.68 11.88 582.68 13.44 L 582.68 22.32 L 565.28 22.32 L 565.28 24.72 L 582.68 24.72 L 582.68 30.84 L 564.96 30.84 Q 563.4 30.84 562.08 30.04 Q 560.76 29.24 559.96 27.92 Q 559.16 26.6 559.16 25.04 Z M 565.28 13.76 L 565.28 16.96 L 576.56 16.96 L 576.56 13.76 L 565.28 13.76 Z"
                    id="23" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 601.36 30.84 L 596.12 30.84 L 583.36 7.64 L 590.4 7.64 L 598.76 23.04 L 607.12 7.64 L 614.16 7.64 L 601.36 30.84 Z"
                    id="24" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 614.96 25.04 L 614.96 13.44 Q 614.96 11.88 615.76 10.56 Q 616.56 9.24 617.88 8.44 Q 619.2 7.64 620.76 7.64 L 632.68 7.64 Q 634.28 7.64 635.6 8.44 Q 636.92 9.24 637.7 10.56 Q 638.48 11.88 638.48 13.44 L 638.48 22.32 L 621.08 22.32 L 621.08 24.72 L 638.48 24.72 L 638.48 30.84 L 620.76 30.84 Q 619.2 30.84 617.88 30.04 Q 616.56 29.24 615.76 27.92 Q 614.96 26.6 614.96 25.04 Z M 621.08 13.76 L 621.08 16.96 L 632.36 16.96 L 632.36 13.76 L 621.08 13.76 Z"
                    id="25" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 641.64 25.04 L 641.64 0 L 647.8 0 L 647.8 24.72 L 652.48 24.72 L 652.48 30.84 L 647.44 30.84 Q 645.88 30.84 644.56 30.04 Q 643.24 29.24 642.44 27.92 Q 641.64 26.6 641.64 25.04 Z"
                    id="26" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 655.48 25.04 L 655.48 13.44 Q 655.48 11.88 656.28 10.56 Q 657.08 9.24 658.4 8.44 Q 659.72 7.64 661.28 7.64 L 673.2 7.64 Q 674.8 7.64 676.12 8.44 Q 677.44 9.24 678.22 10.56 Q 679 11.88 679 13.44 L 679 25.04 Q 679 26.6 678.22 27.92 Q 677.44 29.24 676.12 30.04 Q 674.8 30.84 673.2 30.84 L 661.28 30.84 Q 659.72 30.84 658.4 30.04 Q 657.08 29.24 656.28 27.92 Q 655.48 26.6 655.48 25.04 Z M 661.6 24.72 L 672.88 24.72 L 672.88 13.76 L 661.6 13.76 L 661.6 24.72 Z"
                    id="27" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 689.4 40.04 L 683.28 40.04 L 683.28 7.64 L 701 7.64 Q 702.6 7.64 703.92 8.44 Q 705.24 9.24 706.02 10.56 Q 706.8 11.88 706.8 13.44 L 706.8 25.04 Q 706.8 26.6 706.02 27.92 Q 705.24 29.24 703.92 30.04 Q 702.6 30.84 701 30.84 L 689.4 30.84 L 689.4 40.04 Z M 689.4 24.72 L 700.68 24.72 L 700.68 13.76 L 689.4 13.76 L 689.4 24.72 Z"
                    id="28" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 709.72 25.04 L 709.72 13.44 Q 709.72 11.88 710.52 10.56 Q 711.32 9.24 712.64 8.44 Q 713.96 7.64 715.52 7.64 L 727.44 7.64 Q 729.04 7.64 730.36 8.44 Q 731.68 9.24 732.46 10.56 Q 733.24 11.88 733.24 13.44 L 733.24 22.32 L 715.84 22.32 L 715.84 24.72 L 733.24 24.72 L 733.24 30.84 L 715.52 30.84 Q 713.96 30.84 712.64 30.04 Q 711.32 29.24 710.52 27.92 Q 709.72 26.6 709.72 25.04 Z M 715.84 13.76 L 715.84 16.96 L 727.12 16.96 L 727.12 13.76 L 715.84 13.76 Z"
                    id="29" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 743.28 30.84 L 737.16 30.84 L 737.16 13.44 Q 737.16 11.88 737.96 10.56 Q 738.76 9.24 740.08 8.44 Q 741.4 7.64 743 7.64 L 755.8 7.64 L 755.8 13.76 L 743.28 13.76 L 743.28 30.84 Z"
                    id="30" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 784.12 30.84 L 779.52 30.84 L 770.4 7.64 L 776.88 7.64 L 781.88 19.68 L 787.12 7.64 L 793.04 7.64 L 798.64 19.84 L 803.28 7.64 L 809.76 7.64 L 801.04 30.84 L 796.4 30.84 L 790.12 17 L 784.12 30.84 Z"
                    id="32" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 818.52 30.84 L 812.4 30.84 L 812.4 7.64 L 818.52 7.64 L 818.52 30.84 Z M 818.52 6.2 L 812.4 6.2 L 812.4 0.04 L 818.52 0.04 L 818.52 6.2 Z"
                    id="33" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 822.4 25.04 L 822.4 0.76 L 828.52 0.76 L 828.52 7.64 L 837.12 7.64 L 837.12 13.76 L 828.52 13.76 L 828.52 24.72 L 837.12 24.72 L 837.12 30.84 L 828.24 30.84 Q 826.64 30.84 825.32 30.04 Q 824 29.24 823.2 27.92 Q 822.4 26.6 822.4 25.04 Z"
                    id="34" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 847.4 30.84 L 841.28 30.84 L 841.28 0.04 L 847.4 0.04 L 847.4 7.64 L 859 7.64 Q 860.56 7.64 861.88 8.44 Q 863.2 9.24 864 10.56 Q 864.8 11.88 864.8 13.44 L 864.8 30.84 L 858.68 30.84 L 858.68 13.76 L 847.4 13.76 L 847.4 30.84 Z"
                    id="35" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 886.84 30.84 L 880.56 30.84 L 880.56 28.84 L 888.56 19.04 L 880.56 9.64 L 880.56 7.64 L 886.84 7.64 L 892.52 14.36 L 898.16 7.64 L 904.48 7.64 L 904.48 9.64 L 896.48 19.04 L 904.48 28.84 L 904.48 30.84 L 898.2 30.84 L 892.52 23.88 L 886.84 30.84 Z"
                    id="37" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 938.72 39.16 L 924.64 39.16 L 924.64 33 L 938.4 33 L 938.4 30.84 L 926.8 30.84 Q 925.2 30.84 923.88 30.04 Q 922.56 29.24 921.76 27.92 Q 920.96 26.6 920.96 25.04 L 920.96 7.72 L 927.08 7.72 L 927.08 24.72 L 938.4 24.72 L 938.4 7.72 L 944.52 7.72 L 944.52 33.36 Q 944.52 34.96 943.74 36.28 Q 942.96 37.6 941.64 38.38 Q 940.32 39.16 938.72 39.16 Z"
                    id="39" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 947.72 25.04 L 947.72 13.44 Q 947.72 11.88 948.52 10.56 Q 949.32 9.24 950.64 8.44 Q 951.96 7.64 953.52 7.64 L 965.44 7.64 Q 967.04 7.64 968.36 8.44 Q 969.68 9.24 970.46 10.56 Q 971.24 11.88 971.24 13.44 L 971.24 22.32 L 953.84 22.32 L 953.84 24.72 L 971.24 24.72 L 971.24 30.84 L 953.52 30.84 Q 951.96 30.84 950.64 30.04 Q 949.32 29.24 948.52 27.92 Q 947.72 26.6 947.72 25.04 Z M 953.84 13.76 L 953.84 16.96 L 965.12 16.96 L 965.12 13.76 L 953.84 13.76 Z"
                    id="40" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 998.96 30.84 L 981.24 30.84 Q 979.64 30.84 978.32 30.04 Q 977 29.24 976.22 27.92 Q 975.44 26.6 975.44 25.04 L 975.44 16.16 L 992.84 16.16 L 992.84 13.76 L 975.44 13.76 L 975.44 7.64 L 993.16 7.64 Q 994.76 7.64 996.08 8.44 Q 997.4 9.24 998.18 10.56 Q 998.96 11.88 998.96 13.44 L 998.96 30.84 Z M 981.56 24.72 L 992.84 24.72 L 992.84 21.52 L 981.56 21.52 L 981.56 24.72 Z"
                    id="41" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1008.24 30.84 L 1002.12 30.84 L 1002.12 13.44 Q 1002.12 11.88 1002.92 10.56 Q 1003.72 9.24 1005.04 8.44 Q 1006.36 7.64 1007.96 7.64 L 1020.76 7.64 L 1020.76 13.76 L 1008.24 13.76 L 1008.24 30.84 Z"
                    id="42" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1023.8 25.04 L 1023.8 23.88 L 1029.92 23.88 L 1029.92 24.72 L 1041.2 24.72 L 1041.2 22.32 L 1029.6 22.32 Q 1028.04 22.32 1026.72 21.52 Q 1025.4 20.72 1024.6 19.4 Q 1023.8 18.08 1023.8 16.52 L 1023.8 13.44 Q 1023.8 11.88 1024.6 10.56 Q 1025.4 9.24 1026.72 8.44 Q 1028.04 7.64 1029.6 7.64 L 1041.52 7.64 Q 1043.12 7.64 1044.44 8.44 Q 1045.76 9.24 1046.56 10.56 Q 1047.36 11.88 1047.36 13.44 L 1047.36 14.6 L 1041.2 14.6 L 1041.2 13.76 L 1029.92 13.76 L 1029.92 16.16 L 1041.52 16.16 Q 1043.12 16.16 1044.44 16.96 Q 1045.76 17.76 1046.56 19.08 Q 1047.36 20.4 1047.36 21.96 L 1047.36 25.04 Q 1047.36 26.6 1046.56 27.92 Q 1045.76 29.24 1044.44 30.04 Q 1043.12 30.84 1041.52 30.84 L 1029.6 30.84 Q 1028.04 30.84 1026.72 30.04 Q 1025.4 29.24 1024.6 27.92 Q 1023.8 26.6 1023.8 25.04 Z"
                    id="43" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1064.24 25.04 L 1064.24 13.44 Q 1064.24 11.88 1065.04 10.56 Q 1065.84 9.24 1067.16 8.44 Q 1068.48 7.64 1070.04 7.64 L 1081.96 7.64 Q 1083.56 7.64 1084.88 8.44 Q 1086.2 9.24 1086.98 10.56 Q 1087.76 11.88 1087.76 13.44 L 1087.76 25.04 Q 1087.76 26.6 1086.98 27.92 Q 1086.2 29.24 1084.88 30.04 Q 1083.56 30.84 1081.96 30.84 L 1070.04 30.84 Q 1068.48 30.84 1067.16 30.04 Q 1065.84 29.24 1065.04 27.92 Q 1064.24 26.6 1064.24 25.04 Z M 1070.36 24.72 L 1081.64 24.72 L 1081.64 13.76 L 1070.36 13.76 L 1070.36 24.72 Z"
                    id="45" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1098.12 30.84 L 1092 30.84 L 1092 5.84 Q 1092 4.28 1092.8 2.96 Q 1093.6 1.64 1094.92 0.84 Q 1096.24 0.04 1097.84 0.04 L 1106.72 0.04 L 1106.72 6.2 L 1098.12 6.2 L 1098.12 7.64 L 1106.72 7.64 L 1106.72 13.76 L 1098.12 13.76 L 1098.12 30.84 Z"
                    id="46" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1122.4 25.04 L 1122.4 13.44 Q 1122.4 11.88 1123.2 10.56 Q 1124 9.24 1125.32 8.44 Q 1126.64 7.64 1128.2 7.64 L 1140.12 7.64 Q 1141.72 7.64 1143.04 8.44 Q 1144.36 9.24 1145.14 10.56 Q 1145.92 11.88 1145.92 13.44 L 1145.92 22.32 L 1128.52 22.32 L 1128.52 24.72 L 1145.92 24.72 L 1145.92 30.84 L 1128.2 30.84 Q 1126.64 30.84 1125.32 30.04 Q 1124 29.24 1123.2 27.92 Q 1122.4 26.6 1122.4 25.04 Z M 1128.52 13.76 L 1128.52 16.96 L 1139.8 16.96 L 1139.8 13.76 L 1128.52 13.76 Z"
                    id="48" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1155.32 30.84 L 1149.04 30.84 L 1149.04 28.84 L 1157.04 19.04 L 1149.04 9.64 L 1149.04 7.64 L 1155.32 7.64 L 1161 14.36 L 1166.64 7.64 L 1172.96 7.64 L 1172.96 9.64 L 1164.96 19.04 L 1172.96 28.84 L 1172.96 30.84 L 1166.68 30.84 L 1161 23.88 L 1155.32 30.84 Z"
                    id="49" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1183.16 40.04 L 1177.04 40.04 L 1177.04 7.64 L 1194.76 7.64 Q 1196.36 7.64 1197.68 8.44 Q 1199 9.24 1199.78 10.56 Q 1200.56 11.88 1200.56 13.44 L 1200.56 25.04 Q 1200.56 26.6 1199.78 27.92 Q 1199 29.24 1197.68 30.04 Q 1196.36 30.84 1194.76 30.84 L 1183.16 30.84 L 1183.16 40.04 Z M 1183.16 24.72 L 1194.44 24.72 L 1194.44 13.76 L 1183.16 13.76 L 1183.16 24.72 Z"
                    id="50" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1203.48 25.04 L 1203.48 13.44 Q 1203.48 11.88 1204.28 10.56 Q 1205.08 9.24 1206.4 8.44 Q 1207.72 7.64 1209.28 7.64 L 1221.2 7.64 Q 1222.8 7.64 1224.12 8.44 Q 1225.44 9.24 1226.22 10.56 Q 1227 11.88 1227 13.44 L 1227 22.32 L 1209.6 22.32 L 1209.6 24.72 L 1227 24.72 L 1227 30.84 L 1209.28 30.84 Q 1207.72 30.84 1206.4 30.04 Q 1205.08 29.24 1204.28 27.92 Q 1203.48 26.6 1203.48 25.04 Z M 1209.6 13.76 L 1209.6 16.96 L 1220.88 16.96 L 1220.88 13.76 L 1209.6 13.76 Z"
                    id="51" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1237.04 30.84 L 1230.92 30.84 L 1230.92 13.44 Q 1230.92 11.88 1231.72 10.56 Q 1232.52 9.24 1233.84 8.44 Q 1235.16 7.64 1236.76 7.64 L 1249.56 7.64 L 1249.56 13.76 L 1237.04 13.76 L 1237.04 30.84 Z"
                    id="52" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1258.88 30.84 L 1252.76 30.84 L 1252.76 7.64 L 1258.88 7.64 L 1258.88 30.84 Z M 1258.88 6.2 L 1252.76 6.2 L 1252.76 0.04 L 1258.88 0.04 L 1258.88 6.2 Z"
                    id="53" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1262.28 25.04 L 1262.28 13.44 Q 1262.28 11.88 1263.08 10.56 Q 1263.88 9.24 1265.2 8.44 Q 1266.52 7.64 1268.08 7.64 L 1280 7.64 Q 1281.6 7.64 1282.92 8.44 Q 1284.24 9.24 1285.02 10.56 Q 1285.8 11.88 1285.8 13.44 L 1285.8 22.32 L 1268.4 22.32 L 1268.4 24.72 L 1285.8 24.72 L 1285.8 30.84 L 1268.08 30.84 Q 1266.52 30.84 1265.2 30.04 Q 1263.88 29.24 1263.08 27.92 Q 1262.28 26.6 1262.28 25.04 Z M 1268.4 13.76 L 1268.4 16.96 L 1279.68 16.96 L 1279.68 13.76 L 1268.4 13.76 Z"
                    id="54" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1296.2 30.84 L 1290.08 30.84 L 1290.08 7.64 L 1307.8 7.64 Q 1309.4 7.64 1310.72 8.44 Q 1312.04 9.24 1312.82 10.56 Q 1313.6 11.88 1313.6 13.44 L 1313.6 30.84 L 1307.48 30.84 L 1307.48 13.76 L 1296.2 13.76 L 1296.2 30.84 Z"
                    id="55" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1316.8 25.04 L 1316.8 13.44 Q 1316.8 11.88 1317.6 10.56 Q 1318.4 9.24 1319.72 8.44 Q 1321.04 7.64 1322.6 7.64 L 1340.28 7.64 L 1340.28 13.76 L 1322.92 13.76 L 1322.92 24.72 L 1340.32 24.72 L 1340.32 30.84 L 1322.6 30.84 Q 1321.04 30.84 1319.72 30.04 Q 1318.4 29.24 1317.6 27.92 Q 1316.8 26.6 1316.8 25.04 Z"
                    id="56" vector-effect="non-scaling-stroke"/>
                <path
                    d="M 1343.6 25.04 L 1343.6 13.44 Q 1343.6 11.88 1344.4 10.56 Q 1345.2 9.24 1346.52 8.44 Q 1347.84 7.64 1349.4 7.64 L 1361.32 7.64 Q 1362.92 7.64 1364.24 8.44 Q 1365.56 9.24 1366.34 10.56 Q 1367.12 11.88 1367.12 13.44 L 1367.12 22.32 L 1349.72 22.32 L 1349.72 24.72 L 1367.12 24.72 L 1367.12 30.84 L 1349.4 30.84 Q 1347.84 30.84 1346.52 30.04 Q 1345.2 29.24 1344.4 27.92 Q 1343.6 26.6 1343.6 25.04 Z M 1349.72 13.76 L 1349.72 16.96 L 1361 16.96 L 1361 13.76 L 1349.72 13.76 Z"
                    id="57" vector-effect="non-scaling-stroke"/>
            </g>
        </svg>
    </>);
}