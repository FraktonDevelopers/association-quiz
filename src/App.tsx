import './App.css';
import { useState } from 'react';

function App() {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid grid-cols-1 gap-4">
          <p className="text-5xl font-bold uppercase mb-10">Association Quiz</p>

          <a className="bg-[#7f00ff] p-10" href="/create-edit">
            Create/Edit
          </a>
          <a className="bg-[#7f00ff] p-10" href="/show-admin">
            Present
          </a>
          <a
            href="/how-to-play"
            className="cursor-pointer flex justify-start items-center"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />{" "}
            </svg>
            {hovered && (
              <p className="font-light font-mono text-sm pl-2">
                How to play?
              </p>
            )}
          </a>

          <div className="mt-10 flex flex-col items-center space-y-2">
            <p className="text-xs font-bold uppercase content-center">
              Powered by:
            </p>
            <svg
              fill="ffffff"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height=""
              viewBox="0 0 685.000000 207.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M5181 2059 c-175 -29 -343 -182 -395 -358 -18 -62 -21 -203 -5 -270
              89 -386 594 -518 867 -227 195 209 190 512 -12 711 -127 126 -277 173 -455
              144z m248 -204 c60 -33 109 -86 143 -154 19 -39 23 -62 23 -146 0 -120 -21
              -172 -97 -247 -67 -65 -139 -91 -238 -86 -338 20 -422 491 -115 640 55 27 68
              29 145 26 71 -3 94 -9 139 -33z"/>
              <path d="M10 1555 l0 -495 90 0 90 0 0 165 0 165 240 0 240 0 0 80 0 80 -240
              0 -240 0 0 165 0 165 240 0 240 0 0 85 0 85 -330 0 -330 0 0 -495z"/>
              <path d="M880 1556 l0 -496 85 0 85 0 2 163 3 162 92 3 92 3 132 -162 c72 -88
              137 -163 144 -165 6 -3 55 -3 109 -2 l97 3 -53 65 c-29 36 -93 113 -141 172
              l-88 107 51 26 c69 35 125 95 151 163 29 79 24 195 -14 268 -33 65 -103 127
              -176 156 -52 20 -76 22 -313 26 l-258 4 0 -496z m505 305 c48 -21 91 -69 100
              -110 9 -44 -11 -103 -47 -138 -56 -54 -91 -63 -248 -63 l-140 0 0 165 0 165
              148 0 c121 0 154 -4 187 -19z"/>
              <path d="M2008 1573 c-114 -263 -210 -486 -214 -496 -6 -16 1 -18 87 -15 l93
              3 51 120 51 120 224 0 224 0 50 -122 51 -123 93 0 c50 0 92 1 92 3 0 2 -96
              224 -213 493 l-212 489 -85 3 -85 2 -207 -477z m371 75 c39 -92 71 -171 71
              -177 0 -7 -52 -11 -155 -11 l-154 0 45 108 c25 59 60 142 77 184 18 42 35 74
              38 70 4 -4 39 -82 78 -174z"/>
              <path d="M2940 1555 l0 -495 85 0 85 0 0 200 0 200 108 0 107 0 164 -200 164
              -200 110 0 c86 0 107 3 100 13 -6 6 -98 123 -206 258 -107 135 -200 255 -207
              266 -12 18 3 39 145 219 87 109 165 207 173 217 14 16 9 17 -99 16 l-114 0
              -220 -269 -220 -269 -3 269 -2 270 -85 0 -85 0 0 -495z"/>
              <path d="M3880 1965 l0 -85 170 0 170 0 0 -410 0 -410 85 0 85 0 0 410 0 410
              175 0 175 0 0 85 0 85 -430 0 -430 0 0 -85z"/>
              <path d="M5960 1555 l0 -495 85 0 85 0 2 330 3 331 285 -330 285 -330 73 0 72
              -1 0 495 0 495 -90 0 -90 0 -2 -335 -3 -334 -285 334 -285 334 -67 0 -68 1 0
              -495z"/>
              <path d="M2063 535 c-34 -14 -53 -58 -53 -122 0 -28 -3 -33 -25 -33 -20 0 -25
              -5 -25 -25 0 -20 5 -25 25 -25 l25 0 0 -155 0 -155 35 0 35 0 0 155 0 155 45
              0 c41 0 45 2 45 25 0 23 -4 25 -46 25 l-45 0 3 53 3 52 38 3 c34 3 37 6 37 33
              0 26 -3 29 -32 29 -18 -1 -47 -7 -65 -15z"/>
              <path d="M4559 527 c-88 -33 -148 -92 -169 -168 -18 -61 -12 -150 14 -204 43
              -94 128 -144 242 -145 83 0 160 32 196 82 l21 31 -24 18 c-54 41 -67 44 -92
              22 -52 -48 -119 -57 -175 -23 -77 47 -85 189 -14 253 48 43 132 39 184 -10
              l26 -25 46 31 c50 35 51 45 4 87 -60 55 -183 79 -259 51z"/>
              <path d="M10 275 l0 -255 30 0 30 0 0 104 0 104 94 4 c103 4 134 17 166 71 25
              41 26 118 3 158 -31 52 -84 69 -211 69 l-112 0 0 -255z m249 181 c43 -39 36
              -125 -12 -156 -12 -7 -57 -16 -99 -18 l-78 -5 0 103 0 102 84 -3 c65 -3 89 -8
              105 -23z"/>
              <path d="M2440 270 l0 -260 65 0 65 0 0 73 c0 64 3 76 23 96 l24 22 63 -96 63
              -95 74 0 c56 0 74 3 70 13 -2 6 -44 72 -91 146 -48 73 -85 139 -83 146 3 6 44
              58 92 114 l86 101 -83 0 -83 -1 -77 -107 -78 -107 0 108 0 107 -65 0 -65 0 0
              -260z"/>
              <path d="M2990 275 l0 -255 65 0 65 0 0 255 0 255 -65 0 -65 0 0 -255z"/>
              <path d="M3270 270 l0 -260 60 0 59 0 3 143 3 142 113 -142 114 -143 54 0 54
              0 0 260 0 260 -60 0 -59 0 -3 -147 -3 -147 -114 147 -115 147 -53 0 -53 0 0
              -260z"/>
              <path d="M4998 293 c-53 -131 -100 -246 -104 -256 -5 -15 1 -17 59 -17 l66 0
              12 35 13 35 96 0 96 0 13 -35 12 -35 65 0 c35 0 64 3 63 8 0 4 -46 117 -102
              252 l-102 245 -45 3 -45 2 -97 -237z m174 -38 l27 -75 -60 0 c-34 0 -59 4 -57
              8 2 4 14 38 27 75 14 37 27 67 30 67 4 0 18 -34 33 -75z"/>
              <path d="M5460 275 l0 -255 65 0 65 0 0 65 0 65 34 0 c30 0 38 -6 76 -65 l42
              -65 75 0 75 0 -17 28 c-10 15 -33 49 -51 76 l-33 49 30 35 c39 44 49 72 49
              132 0 60 -13 96 -48 134 -45 48 -78 56 -227 56 l-135 0 0 -255z m234 141 c35
              -15 60 -62 49 -94 -15 -43 -45 -62 -100 -62 l-53 0 0 78 c0 43 3 82 7 85 11
              12 62 8 97 -7z"/>
              <path d="M5950 480 l0 -49 68 -3 67 -3 3 -207 2 -208 65 0 65 0 0 210 0 210
              70 0 70 0 0 50 0 50 -205 0 -205 0 0 -50z"/>
              <path d="M6547 523 c-4 -6 -186 -443 -204 -490 -4 -10 12 -13 61 -13 66 0 66
              0 80 35 l15 35 95 0 94 0 12 -35 12 -35 65 0 c58 0 64 2 59 18 -3 9 -50 124
              -104 254 l-97 238 -42 0 c-23 0 -44 -3 -46 -7z m73 -255 c13 -35 25 -69 27
              -75 4 -10 -11 -13 -55 -13 l-61 0 27 75 c15 41 30 75 33 75 4 0 17 -28 29 -62z"/>
              <path d="M1118 428 c-3 -40 -5 -43 -35 -46 -27 -3 -33 -8 -33 -27 0 -19 6 -24
              33 -27 l32 -3 3 -132 c3 -129 3 -132 29 -152 19 -15 40 -21 79 -21 51 0 54 1
              54 25 0 21 -5 25 -31 25 -65 0 -69 8 -69 140 l0 120 50 0 c47 0 50 2 50 25 0
              23 -3 25 -50 25 l-50 0 0 45 c0 43 -1 45 -29 45 -28 0 -30 -3 -33 -42z"/>
              <path d="M4020 385 l0 -65 -65 0 -65 0 0 -40 0 -40 65 0 65 0 0 -65 0 -65 45
              0 45 0 0 65 0 65 65 0 65 0 0 40 0 40 -65 0 -65 0 0 65 0 65 -45 0 -45 0 0
              -65z"/>
              <path d="M478 370 c-67 -36 -93 -100 -40 -100 20 0 35 9 50 30 43 58 138 46
              161 -21 6 -18 11 -34 11 -35 0 -2 -28 -4 -62 -4 -92 -1 -139 -14 -170 -50 -41
              -45 -39 -101 6 -146 31 -31 39 -34 93 -34 58 0 92 14 120 50 11 13 12 11 13
              -12 0 -24 4 -28 30 -28 l30 0 0 128 c0 151 -15 198 -73 225 -47 23 -123 21
              -169 -3z m174 -186 c4 -3 2 -19 -3 -36 -24 -85 -132 -118 -174 -55 -20 32 -8
              67 29 83 31 13 137 19 148 8z"/>
              <path d="M935 375 c-16 -9 -38 -25 -47 -36 -18 -21 -18 -21 -18 10 0 28 -3 31
              -30 31 l-30 0 0 -180 0 -180 29 0 29 0 4 114 c4 136 17 162 91 185 42 13 47
              18 47 43 0 22 -4 28 -22 28 -13 0 -36 -7 -53 -15z"/>
              <path d="M1637 370 c-126 -69 -124 -279 4 -345 36 -19 132 -19 167 -1 121 63
              136 248 27 332 -50 38 -141 44 -198 14z m171 -75 c28 -31 32 -41 32 -90 0 -71
              -21 -112 -67 -132 -48 -20 -92 -10 -129 28 -26 27 -29 37 -29 99 0 75 14 101
              70 126 43 20 85 9 123 -31z"/>
              </g>
              </svg>
          </div>
        </div>
      </header>
    </div>)
}

export default App;
