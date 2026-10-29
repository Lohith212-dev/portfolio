// The build flow as two hand-placed SVGs: a wide one for desktop and a
// tall one for phones. Orange = a person deciding, sky = agents working,
// dashed orange = sent back to fix. Class names are styled from
// MeanwhileWebPages.module.css (.flowCard :global(...)).

const WIDE_TITLE = 'Flow: you write the brief; agents research and script; you sign off the story and pick the direction; agents build in gated loops with you approving the hero; agents review and you make a final pass, sending fixes back; you ship.';

export function FlowWide({ className }) {
  return (
    <svg className={className} viewBox="0 0 1240 390" role="img" aria-labelledby="fw-t">
      <title id="fw-t">{WIDE_TITLE}</title>
      <defs>
        <marker id="ahW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path className="ah" d="M0 0 L10 5 L0 10 z" /></marker>
        <marker id="ahWp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path className="ah-p" d="M0 0 L10 5 L0 10 z" /></marker>
      </defs>
      <rect className="lane-h" x="0" y="20" width="1240" height="134" rx="4" />
      <rect className="lane-a" x="0" y="190" width="1240" height="190" rx="4" />
      <text className="lane-t" x="14" y="42">YOU DECIDE</text>
      <text className="lane-t" x="14" y="212">AGENTS WORK</text>

      <path className="ln" d="M225 90 C 242 90, 228 280, 243 280" markerEnd="url(#ahW)" />
      <path className="ln" d="M355 280 L 373 280" markerEnd="url(#ahW)" />
      <path className="ln" d="M430 247 L 430 110" markerEnd="url(#ahW)" />
      <path className="ln" d="M447 90 L 503 90" markerEnd="url(#ahW)" />
      <path className="ln" d="M615 90 C 634 90, 622 287, 638 287" markerEnd="url(#ahW)" />
      <path className="ln-back" d="M682 108 L 682 250" markerStart="url(#ahWp)" markerEnd="url(#ahWp)" />
      <path className="ln" d="M940 280 L 958 280" markerEnd="url(#ahW)" />
      <path className="ln" d="M1015 250 L 1015 110" markerEnd="url(#ahW)" />
      <path className="ln-back" d="M1000 102 C 965 135, 925 170, 905 218" markerEnd="url(#ahWp)" />
      <text className="sh" x="930" y="150" textAnchor="end">send back</text>
      <path className="ln" d="M1032 90 L 1108 90" markerEnd="url(#ahW)" />

      <rect className="bx bx-h" x="115" y="62" width="110" height="56" rx="4" />
      <text className="t" x="128" y="86">Brief</text><text className="s" x="128" y="105">what, who, why</text>
      <rect className="bx bx-h" x="505" y="62" width="110" height="56" rx="4" />
      <text className="t" x="518" y="86">Direction</text><text className="s" x="518" y="105">pick the look</text>
      <rect className="bx bx-h" x="1110" y="62" width="110" height="56" rx="4" />
      <text className="t" x="1123" y="86">Ship</text><text className="s" x="1123" y="105">it goes live</text>

      <circle className="gate" cx="430" cy="90" r="17" /><path className="tick" d="M422 90 l6 6 l10 -12" />
      <text className="sh" x="430" y="62" textAnchor="middle">sign off the story</text>
      <circle className="gate" cx="682" cy="90" r="17" /><path className="tick" d="M674 90 l6 6 l10 -12" />
      <text className="sh" x="682" y="62" textAnchor="middle">approve the hero</text>
      <circle className="gate" cx="1015" cy="90" r="17" /><path className="tick" d="M1007 90 l6 6 l10 -12" />
      <text className="sh" x="1015" y="62" textAnchor="middle">your pass</text>

      <rect className="bx bx-a" x="245" y="247" width="110" height="66" rx="4" />
      <text className="t" x="258" y="271">Research</text><text className="s" x="258" y="290">market + refs</text><text className="s" x="258" y="305">reruns weekly</text>
      <rect className="bx bx-a" x="375" y="247" width="110" height="66" rx="4" />
      <text className="t" x="388" y="271">Script</text><text className="s" x="388" y="290">one story,</text><text className="s" x="388" y="305">claims sourced</text>
      <rect className="bx bx-a" x="640" y="220" width="300" height="140" rx="4" />
      <text className="t" x="652" y="243">Build, in gated loops</text>
      <rect className="chip" x="652" y="252" width="62" height="42" rx="3" />
      <text className="t2" x="661" y="270">1 Hero</text><text className="s" x="661" y="286">first</text>
      <rect className="chip" x="720" y="252" width="94" height="42" rx="3" />
      <text className="t2" x="729" y="270">2 Signature</text><text className="s" x="729" y="286">section</text>
      <rect className="chip" x="820" y="252" width="108" height="42" rx="3" />
      <text className="t2" x="829" y="270">3 The rest</text><text className="s" x="829" y="286">in parallel</text>
      <path className="ln" d="M664 318 a 9 9 0 1 1 -9 9" markerEnd="url(#ahW)" />
      <text className="s" x="682" y="323">each loop: build, screenshot,</text>
      <text className="s" x="682" y="340">grade itself, fix, repeat</text>
      <rect className="bx bx-a" x="960" y="252" width="110" height="56" rx="4" />
      <text className="t" x="973" y="276">Review</text><text className="s" x="973" y="295">a fresh agent</text>
    </svg>
  );
}

export function FlowTall({ className }) {
  return (
    <svg className={className} viewBox="0 0 360 770" role="img" aria-labelledby="ft-t">
      <title id="ft-t">{WIDE_TITLE}</title>
      <defs>
        <marker id="ahT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path className="ah" d="M0 0 L10 5 L0 10 z" /></marker>
        <marker id="ahTp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path className="ah-p" d="M0 0 L10 5 L0 10 z" /></marker>
      </defs>
      <rect className="lane-h" x="0" y="0" width="174" height="770" rx="4" />
      <rect className="lane-a" x="180" y="0" width="180" height="770" rx="4" />
      <text className="lane-t" x="87" y="24" textAnchor="middle">YOU DECIDE</text>
      <text className="lane-t" x="270" y="24" textAnchor="middle">AGENTS WORK</text>

      <path className="ln" d="M150 75 C 182 75, 176 139, 204 139" markerEnd="url(#ahT)" />
      <path className="ln" d="M266 170 L 266 203" markerEnd="url(#ahT)" />
      <path className="ln" d="M206 235 L 110 235" markerEnd="url(#ahT)" />
      <path className="ln" d="M90 252 L 90 293" markerEnd="url(#ahT)" />
      <path className="ln" d="M150 320 C 172 320, 168 392, 184 392" markerEnd="url(#ahT)" />
      <path className="ln-back" d="M108 444 L 194 444" markerStart="url(#ahTp)" markerEnd="url(#ahTp)" />
      <path className="ln" d="M266 594 L 266 618" markerEnd="url(#ahT)" />
      <path className="ln" d="M206 645 L 110 645" markerEnd="url(#ahT)" />
      <path className="ln-back" d="M96 628 C 110 600, 150 572, 184 566" markerEnd="url(#ahTp)" />
      <text className="sh" x="18" y="584">send back</text>
      <path className="ln" d="M90 662 L 90 693" markerEnd="url(#ahT)" />

      <rect className="bx bx-h" x="30" y="50" width="120" height="52" rx="4" />
      <text className="t" x="42" y="72">Brief</text><text className="s" x="42" y="91">what, who, why</text>
      <rect className="bx bx-h" x="30" y="295" width="120" height="52" rx="4" />
      <text className="t" x="42" y="317">Direction</text><text className="s" x="42" y="336">pick the look</text>
      <rect className="bx bx-h" x="30" y="695" width="120" height="52" rx="4" />
      <text className="t" x="42" y="717">Ship</text><text className="s" x="42" y="736">it goes live</text>

      <circle className="gate" cx="90" cy="235" r="17" /><path className="tick" d="M82 235 l6 6 l10 -12" />
      <text className="sh" x="90" y="207" textAnchor="middle">sign off the story</text>
      <circle className="gate" cx="90" cy="444" r="17" /><path className="tick" d="M82 444 l6 6 l10 -12" />
      <text className="sh" x="90" y="416" textAnchor="middle">approve the hero</text>
      <circle className="gate" cx="90" cy="645" r="17" /><path className="tick" d="M82 645 l6 6 l10 -12" />
      <text className="sh" x="90" y="617" textAnchor="middle">your pass</text>

      <rect className="bx bx-a" x="206" y="108" width="120" height="62" rx="4" />
      <text className="t" x="218" y="130">Research</text><text className="s" x="218" y="148">market + refs</text><text className="s" x="218" y="163">reruns weekly</text>
      <rect className="bx bx-a" x="206" y="205" width="120" height="62" rx="4" />
      <text className="t" x="218" y="227">Script</text><text className="s" x="218" y="245">one story,</text><text className="s" x="218" y="260">claims sourced</text>
      <rect className="bx bx-a" x="186" y="370" width="160" height="224" rx="4" />
      <text className="t" x="198" y="393">Build, in loops</text>
      <rect className="chip" x="198" y="404" width="136" height="40" rx="3" />
      <text className="t2" x="208" y="421">1 Hero</text><text className="s" x="208" y="437">first</text>
      <rect className="chip" x="198" y="450" width="136" height="40" rx="3" />
      <text className="t2" x="208" y="467">2 Signature</text><text className="s" x="208" y="483">section</text>
      <rect className="chip" x="198" y="496" width="136" height="40" rx="3" />
      <text className="t2" x="208" y="513">3 The rest</text><text className="s" x="208" y="529">in parallel</text>
      <path className="ln" d="M208 552 a 8 8 0 1 1 -8 8" markerEnd="url(#ahT)" />
      <text className="s" x="222" y="558">build, screenshot,</text>
      <text className="s" x="222" y="574">grade itself, fix</text>
      <rect className="bx bx-a" x="206" y="620" width="120" height="52" rx="4" />
      <text className="t" x="218" y="642">Review</text><text className="s" x="218" y="661">a fresh agent</text>
    </svg>
  );
}
