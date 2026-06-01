import Tooltip from '../../../shared/Tooltip';
import ActivitySidebarDemo from '../../supporting-graphics/design-iteration-artifacts/ActivitySidebarDemo';
import R2RemedialRowDesign from '../../supporting-graphics/design-iteration-artifacts/R2RemedialRowDesign';
import R6DualPlacementDesign from '../../supporting-graphics/design-iteration-artifacts/R6DualPlacementDesign';
import {
  designForgeInputFiles,
  inputSpecStackCards,
  journeyComponentLibrary,
  journeyComponentRows,
  migrationFlowchart,
  migrationFolderTree,
  sandboxFileStructureExcerpt,
  sandboxIntegrationFiles,
} from '../satLmsData';
import styles from '../SatLmsCaseStudy.module.css';

export function CardFocusBar({ phase, fillClass }) {
  // One focus/dwell bar lives INSIDE each card of a stacked-pair artifact.
  // The `base` bar fills 0->100 while the base card is in focus (the first part
  // of the reveal cycle, before the overlay reveals), then hides; the `overlay`
  // bar fills 0->100 while the overlay card is in focus, then the cycle loops.
  // Both are phase-locked to the same 18s/-8s keyframe as the artifact reveal
  // animations, so each card visibly runs its own 0->100 bar before the next
  // card appears.
  // `cycle` is a single continuous 0->100 bar for multi-card artifacts (where a
  // base/overlay split doesn't map cleanly) — one progress bar per artifact.
  const cls = fillClass
    || (phase === 'overlay' ? styles.cardFocusFillOverlay : styles.cardFocusFillBase);

  return (
    <span className={styles.cardFocusBar} aria-hidden="true">
      <span className={`${styles.cardFocusFill} ${cls}`} />
    </span>
  );
}

function ArtifactChrome({ title, titleClassName }) {
  const titleClasses = titleClassName ? `${styles.artifactChromeTitle} ${titleClassName}` : styles.artifactChromeTitle;

  return (
    <div className={styles.artifactChrome}>
      <span className={styles.artifactChromeDots} aria-hidden="true">
        <span className={`${styles.artifactChromeDot} ${styles.artifactChromeDotRed}`} />
        <span className={`${styles.artifactChromeDot} ${styles.artifactChromeDotYellow}`} />
        <span className={`${styles.artifactChromeDot} ${styles.artifactChromeDotGreen}`} />
      </span>
      <span className={titleClasses}>{title}</span>
      <span className={styles.artifactChromeSpacer} aria-hidden="true" />
    </div>
  );
}

function ArtifactWindow({ title, bodyClassName, children }) {
  const bodyClasses = bodyClassName ? `${styles.artifactBody} ${bodyClassName}` : styles.artifactBody;

  return (
    <div className={styles.processArtifactPreview}>
      <div className={styles.artifactWindow}>
        <ArtifactChrome title={title} />
        <div className={bodyClasses}>{children}</div>
      </div>
    </div>
  );
}

function BackendSpecCodeExcerpt() {
  return (
    <pre className={styles.inputSpecOverlayCode}>
      <span>---</span>{'\n'}
      <span>## 1. Data Models & Schema</span>{'\n\n'}
      <span>### `remedials` Table</span>{'\n\n'}
      <span className={styles.inputSpecCodeKeyword}>CREATE TABLE</span><span> remedials </span><span className={styles.inputSpecCodeMuted}>(</span>{'\n'}
      <span>    id </span><span className={styles.inputSpecCodeType}>UUID</span><span> </span><span className={styles.inputSpecCodeKeyword}>PRIMARY KEY DEFAULT</span><span> gen_random_uuid</span><span className={styles.inputSpecCodeMuted}>(),</span>{'\n'}
      <span>    student_id </span><span className={styles.inputSpecCodeType}>UUID</span><span> </span><span className={styles.inputSpecCodeKeyword}>NOT NULL REFERENCES</span><span> students</span><span className={styles.inputSpecCodeMuted}>(id),</span>{'\n'}
      <span>    course_id </span><span className={styles.inputSpecCodeType}>UUID</span><span> </span><span className={styles.inputSpecCodeKeyword}>NOT NULL REFERENCES</span><span> courses</span><span className={styles.inputSpecCodeMuted}>(id),</span>{'\n'}
      <span>    mother_activity_id </span><span className={styles.inputSpecCodeType}>UUID</span><span> </span><span className={styles.inputSpecCodeKeyword}>NOT NULL REFERENCES</span><span> activities</span><span className={styles.inputSpecCodeMuted}>(id),</span>{'\n\n'}
      <span className={styles.inputSpecCodeComment}>    -- Remedial metadata</span>{'\n'}
      <span>    question_count </span><span className={styles.inputSpecCodeType}>INTEGER</span><span> </span><span className={styles.inputSpecCodeKeyword}>NOT NULL</span><span className={styles.inputSpecCodeMuted}>,</span>{'\n'}
      <span>    time_estimate_minutes </span><span className={styles.inputSpecCodeType}>INTEGER</span><span> </span><span className={styles.inputSpecCodeKeyword}>NOT NULL</span><span className={styles.inputSpecCodeMuted}>,</span>{'\n'}
      <span>    reason </span><span className={styles.inputSpecCodeType}>TEXT</span><span> </span><span className={styles.inputSpecCodeKeyword}>NOT NULL</span><span className={styles.inputSpecCodeMuted}>, </span><span className={styles.inputSpecCodeComment}>-- </span><span className={styles.inputSpecCodeString}>"3 mistakes in Linear Equations Practice"</span>{'\n\n'}
      <span className={styles.inputSpecCodeComment}>    -- Questions (references to parallel questions)</span>{'\n'}
      <span>    question_ids </span><span className={styles.inputSpecCodeType}>UUID[]</span><span> </span><span className={styles.inputSpecCodeKeyword}>NOT NULL</span><span className={styles.inputSpecCodeMuted}>,</span>
    </pre>
  );
}

function InputSpecBusinessRulesStack() {
  return (
    <div className={styles.processArtifactPreview}>
      <div className={styles.inputSpecStackStage}>
        <div className={`${styles.artifactWindow} ${styles.inputSpecBaseWindow}`} aria-hidden="true">
          <ArtifactChrome title="Input specification | Remedials" />
          <div className={`${styles.artifactBody} ${styles.inputSpecBaseBody}`}>
            {designForgeInputFiles.map((row) => (
              <span key={row}>{row}</span>
            ))}
          </div>
          <span className={styles.inputSpecFocusVeil} aria-hidden="true" />
          <CardFocusBar fillClass={styles.cardBarA} />
        </div>

        {inputSpecStackCards.map((card) => (
          <div
            key={card.title}
            className={`${styles.artifactWindow} ${styles.inputSpecOverlayWindow} ${styles[card.className]}`}
            aria-label={`${card.title} artifact`}
          >
            <ArtifactChrome
              title={card.title}
              titleClassName={styles.inputSpecOverlayTitle}
            />
            <div className={`${styles.artifactBody} ${styles.inputSpecOverlayBody}`}>
              {card.variant === 'sql' ? (
                <BackendSpecCodeExcerpt />
              ) : (
                <pre className={styles.inputSpecOverlayCode}>{card.excerpt}</pre>
              )}
            </div>
            <span className={styles.inputSpecFocusVeil} aria-hidden="true" />
            <CardFocusBar fillClass={styles[card.barClass]} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SandboxRoutingCode() {
  return (
    <pre className={styles.sandboxRoutingCode}>
      <span>## 9. Routing Setup</span>{'\n\n'}
      <span>Add to `App.jsx`:</span>{'\n\n'}
      <span>```</span>{'\n'}
      <span className={styles.inputSpecCodeComment}>// Course home sandbox</span>{'\n'}
      <span className={styles.inputSpecCodeMuted}>&lt;</span><span className={styles.inputSpecCodeKeyword}>Route</span><span> path=</span><span className={styles.inputSpecCodeString}>"/sandbox/remedials/:courseCode"</span><span> element=&#123;&#60;</span><span className={styles.inputSpecCodeType}>RemedialsSandboxHome</span>{'\n'}
      <span>/&#62;&#125; /&#62;</span>{'\n\n'}
      <span className={styles.inputSpecCodeComment}>// Activity page sandbox</span>{'\n'}
      <span className={styles.inputSpecCodeMuted}>&lt;</span><span className={styles.inputSpecCodeKeyword}>Route</span><span> path=</span><span className={styles.inputSpecCodeString}>"/sandbox/remedials/:courseCode/activity/:activityId"</span><span> element=</span>{'\n'}
      <span>&#123;&#60;</span><span className={styles.inputSpecCodeType}>RemedialsSandboxActivity</span><span> /&#62;&#125; /&#62;</span>
    </pre>
  );
}

function SandboxRequirementArtifact() {
  return (
    <div className={styles.processArtifactPreview}>
      <div className={styles.sandboxArtifactStage}>
        <div className={`${styles.artifactWindow} ${styles.sandboxBaseWindow}`}>
          <ArtifactChrome
            title="02-sandbox-requirement-remedials.md"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.sandboxArtifactBody}`}>
            <pre className={styles.sandboxTreeCode}>{sandboxFileStructureExcerpt}</pre>
          </div>
          <CardFocusBar phase="base" />
        </div>

        <div className={styles.sandboxRoutingCard} aria-label="Routing setup artifact">
          <SandboxRoutingCode />
          <CardFocusBar phase="overlay" />
        </div>
      </div>
    </div>
  );
}

function GapAnalysisArtifact() {
  const optionRows = [
    ['(A) ActivityPage wrapper', 'ActivityPage receives completion event, renders custom results wrapper with R6, then R1 modal'],
    ['(B) Overlay approach', 'Let spark-maximus show default results, ActivityPage overlays R6/R1 on top'],
    ['(C) Callback injection', 'Pass render callback to spark-maximus to inject R6 into its results'],
  ];

  const fieldRows = [
    ['contentId', 'number', 'Yes', 'Unique ID of the remedial', 'Navigation'],
    ['contentType', 'string', 'Yes', 'Must be "REMEDIAL"', 'Card styling (red/coral theme)'],
    ['contentName', 'string', 'Yes', 'Display name (preferably "REM: [Activity Name]")', 'Card title'],
    ['correlationId', 'string', 'Yes', 'UUID for Neuron iframe', 'Launching remedial'],
    ['estimatedDurationMinutes', 'number', 'Yes', 'Expected completion time', 'Time badge on card'],
    ['progressStatus', 'string', 'Yes', '"NOT_STARTED", "INPROGRESS", "COMPLETED"', 'Status badge'],
    ['questionCount', 'number', 'Needs verification', 'Number of questions', 'Card info display'],
    ['mistakeCount', 'number', 'Needs verification', 'Mistakes that triggered it', 'Description: "Fix X gaps..."'],
    ['motherActivityName', 'string', 'Needs verification', 'Parent activity name', 'Description: "...based on [name] attempt"'],
  ];

  return (
    <div className={styles.processArtifactPreview}>
      <div className={styles.gapAnalysisStackStage}>
        <div className={`${styles.artifactWindow} ${styles.gapAnalysisBaseWindow}`}>
          <ArtifactChrome
            title="gap-analysis-summary-remedials.md"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.gapAnalysisBody}`}>
            <p className={styles.gapAnalysisHeading}>### Q4: How do R6 Notice and R1 Modal integrate with Activity Results?</p>
            <p className={styles.gapAnalysisMeta}>
              <strong>Affected Components:</strong> R6 (Notice), R1 (Modal), M1 (Results Screen)
            </p>
            <p className={styles.gapAnalysisSubheading}>The Issue:</p>
            <ul className={styles.gapAnalysisList}>
              <li>Spec shows R6 as a section within the results screen</li>
              <li>R1 modal appears after clicking "Continue" on results</li>
              <li>O0 decision says ActivityPage handles this via callback</li>
            </ul>
            <p className={styles.gapAnalysisSubheading}>Options:</p>
            <table className={styles.gapAnalysisTable}>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {optionRows.map((row) => (
                  <tr key={row[0]}>
                    <td><strong>{row[0]}</strong></td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span className={styles.inputSpecFocusVeil} aria-hidden="true" />
          <CardFocusBar phase="base" />
        </div>

        <div className={`${styles.artifactWindow} ${styles.gapAnalysisDetailWindow}`}>
          <ArtifactChrome
            title="backend-gap-analysis-remedials.md"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.gapAnalysisBody}`}>
            <p className={styles.gapAnalysisHeading}>### Fields Required in Remedial Children (for Next Up card display)</p>
            <table className={`${styles.gapAnalysisTable} ${styles.gapAnalysisFieldTable}`}>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Type</th>
                  <th>Required</th>
                  <th>Description</th>
                  <th>Used For</th>
                </tr>
              </thead>
              <tbody>
                {fieldRows.map((row) => (
                  <tr key={row[0]}>
                    <td><code>{row[0]}</code></td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.gapAnalysisSubheading}>How Frontend Uses This</p>
            <ol className={styles.gapAnalysisList}>
              <li>Extract remedials from `activity.children` in the Next Up block</li>
              <li>Flatten them into the `contentItems` array</li>
              <li>Render each remedial as a separate card immediately after its parent activity</li>
            </ol>
          </div>
          <CardFocusBar phase="overlay" />
        </div>
      </div>
    </div>
  );
}

function DesignIterationArtifact() {
  return (
    <div className={styles.processArtifactPreview}>
      <div className={styles.designIterationStage}>
        <div className={`${styles.designIterationCard} ${styles.designIterationBaseCard}`}>
          <div className={`${styles.designIterationCanvas} ${styles.designIterationCanvasSidebar}`}>
            <ActivitySidebarDemo />
          </div>
          <CardFocusBar fillClass={styles.cardBarA} />
        </div>
        <div className={`${styles.designIterationCard} ${styles.designIterationOverlayCard}`}>
          <div className={`${styles.designIterationCanvas} ${styles.designIterationCanvasR2}`}>
            <R2RemedialRowDesign />
          </div>
          <CardFocusBar fillClass={styles.cardBarB} />
        </div>
        <div className={`${styles.designIterationCard} ${styles.designIterationFinalCard}`}>
          <div className={`${styles.designIterationCanvas} ${styles.designIterationCanvasR6}`}>
            <R6DualPlacementDesign />
          </div>
          <CardFocusBar fillClass={styles.cardBarCD} />
        </div>
      </div>
    </div>
  );
}

function SandboxIntegrationArtifact() {
  return (
    <div className={styles.processArtifactPreview}>
      <div className={styles.sandboxIntegrationStage}>
        <div className={`${styles.artifactWindow} ${styles.sandboxIntegrationPromptWindow}`}>
          <ArtifactChrome
            title="PR4 - Sandbox Integration.md"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.sandboxIntegrationPromptBody}`}>
            <p className={styles.gapAnalysisHeading}>Phase 4 - Sandbox Integration</p>
            <p className={styles.gapAnalysisMeta}><strong>Goal:</strong> Implement finalized designs using established patterns and design tokens.</p>
            <p className={styles.gapAnalysisSubheading}>By the end, the sandbox should have:</p>
            <ol className={styles.gapAnalysisList}>
              <li>All components built with proper design tokens and patterns</li>
              <li>Full responsive implementation across mobile, tablet, and desktop</li>
              <li>Components integrated and working together in the sandbox</li>
              <li>A migration map documenting what needs to move to production</li>
            </ol>
            <p className={styles.gapAnalysisSubheading}>Integration rule:</p>
            <p className={styles.gapAnalysisMeta}>Use production tokens, follow existing component patterns, document non-obvious behavior, and test components together, not in isolation.</p>
          </div>
          <CardFocusBar phase="base" />
        </div>

        <div className={`${styles.artifactWindow} ${styles.sandboxIntegrationFolderWindow}`}>
          <ArtifactChrome
            title="Sandbox integration"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.inputSpecBaseBody}`}>
            {sandboxIntegrationFiles.map((row) => (
              <span key={row}>{row}</span>
            ))}
          </div>
          <CardFocusBar phase="overlay" />
        </div>
      </div>
    </div>
  );
}

function ProductionMigrationArtifact() {
  const migrationRows = [
    ['R1', 'RemedialCreatedModal', 'sandbox/remedials/components/remedials/RemedialCreatedModal/', 'src/components/remedials/RemedialCreatedModal/'],
    ['R3', 'RemedialCompletionFeedback', 'sandbox/remedials/components/remedials/RemedialCompletionFeedback/', 'src/components/remedials/RemedialCompletionFeedback/'],
    ['R4', 'RemedialActivityHeader', 'sandbox/remedials/components/remedials/RemedialActivityHeader/', 'src/components/remedials/RemedialActivityHeader/'],
    ['R5', 'RemedialReasonTooltip', 'sandbox/remedials/components/remedials/RemedialReasonTooltip/', 'src/components/remedials/RemedialReasonTooltip/'],
    ['R6', 'RemedialResultsNotice', 'sandbox/remedials/components/remedials/RemedialResultsNotice/', 'src/components/remedials/RemedialResultsNotice/'],
  ];

  const auditRows = [
    ['Typography', '☐ Pass / ☐ Fail', ''],
    ['Colors', '☐ Pass / ☐ Fail', ''],
    ['Spacing', '☐ Pass / ☐ Fail', ''],
    ['Border Radius', '☐ Pass / ☐ Fail', ''],
    ['Shadows', '☐ Pass / ☐ Fail', ''],
    ['Responsive', '☐ Pass / ☐ Fail', ''],
    ['Accessibility', '☐ Pass / ☐ Fail', ''],
    ['Animations', '☐ Pass / ☐ Fail', ''],
    ['Component Structure', '☐ Pass / ☐ Fail', ''],
    ['Code Quality', '☐ Pass / ☐ Fail', ''],
    ['Icons Usage', '☐ Pass / ☐ Fail', 'Inline SVG arrow needs fix'],
    ['Classname Semantics', '☐ Pass / ☐ Fail', 'r1- → remedial-created-modal-'],
  ];

  return (
    <div className={styles.processArtifactPreview}>
      <div className={styles.productionMigrationStage}>
        <div className={`${styles.artifactWindow} ${styles.productionBaseWindow}`}>
          <ArtifactChrome
            title="prod-migration-map.md"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.gapAnalysisBody}`}>
            <p className={styles.gapAnalysisHeading}>## 3. New Components to Migrate</p>
            <p className={styles.gapAnalysisSubheading}>From Sandbox to Production</p>
            <table className={`${styles.gapAnalysisTable} ${styles.productionMigrationTable}`}>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Component</th>
                  <th>Sandbox Location</th>
                  <th>Production Location</th>
                </tr>
              </thead>
              <tbody>
                {migrationRows.map((row) => (
                  <tr key={row[0]}>
                    <td><code>{row[0]}</code></td>
                    <td>{row[1]}</td>
                    <td><code>{row[2]}</code></td>
                    <td><code>{row[3]}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.gapAnalysisSubheading}>Create New Folder Structure</p>
            <pre className={styles.productionTreeCode}>{migrationFolderTree}</pre>
          </div>
          <span className={styles.inputSpecFocusVeil} aria-hidden="true" />
          <CardFocusBar fillClass={styles.cardBarA} />
        </div>

        <div className={`${styles.artifactWindow} ${styles.productionFlowWindow}`}>
          <ArtifactChrome
            title="migration-process-flowchart"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.inputSpecOverlayBody}`}>
            <p className={styles.gapAnalysisHeading}>## Overall Migration Order</p>
            <p className={styles.gapAnalysisMeta}>Execute migrations in this sequence to avoid broken dependencies:</p>
            <pre className={styles.inputSpecOverlayCode}>{migrationFlowchart}</pre>
          </div>
          <span className={styles.inputSpecFocusVeil} aria-hidden="true" />
          <CardFocusBar fillClass={styles.cardBarB} />
        </div>

        <div className={`${styles.artifactWindow} ${styles.productionAuditWindow}`}>
          <ArtifactChrome
            title="Front-End Audit"
            titleClassName={styles.inputSpecOverlayTitle}
          />
          <div className={`${styles.artifactBody} ${styles.gapAnalysisBody}`}>
            <p className={styles.gapAnalysisHeading}>## Component Audit Reports</p>
            <p className={styles.gapAnalysisSubheading}>R1: RemedialCreatedModal</p>
            <p className={styles.gapAnalysisMeta}><strong>Files:</strong> JSX and CSS implementation for RemedialCreatedModal</p>
            <table className={styles.gapAnalysisTable}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {auditRows.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CardFocusBar fillClass={styles.cardBarCD} />
        </div>
      </div>
    </div>
  );
}

function JourneyComponentChip({ id, state }) {
  const data = journeyComponentLibrary[id];
  const kind = id.startsWith('R') ? 'new' : 'modified';

  const tooltipContent = (
    <span className={styles.journeyTipBody}>
      <span className={styles.journeyTipHeader}>
        <span className={styles.journeyTipCode}>
          {id}
          {state ? <span className={styles.journeyTipState}> ({state})</span> : null}
        </span>
        <span className={styles.journeyTipType}>{data.type}</span>
      </span>
      <span className={styles.journeyTipName}>{data.name}</span>
      <span className={styles.journeyTipPurpose}>{data.purpose}</span>
      <span className={styles.journeyTipStatesLabel}>States</span>
      <span className={styles.journeyTipStates}>
        {data.states.map((s) => (
          <span key={s} className={styles.journeyTipStateTag}>{s}</span>
        ))}
      </span>
    </span>
  );

  return (
    <Tooltip
      content={tooltipContent}
      panelClassName={styles.journeyTipPanel}
      className={styles.journeyChipWrap}
      position="bottom"
    >
      <span className={`${styles.journeyChip} ${kind === 'new' ? styles.journeyChipNew : styles.journeyChipModified}`}>
        {id}
      </span>
    </Tooltip>
  );
}

function JourneyComponentMapArtifact() {
  return (
    <ArtifactWindow title="Journey component mapping | Remedials" bodyClassName={`${styles.artifactBodyJourney} ${styles.artifactBodyClipRight}`}>
      <p className={styles.journeyMapHint}>Hover/Click on the component badges to understand what they are</p>
      <table className={styles.journeyMapTable}>
        <thead>
          <tr>
            <th className={styles.journeyMapColJourney}>Journey</th>
            <th className={styles.journeyMapColFlow}>Component flow</th>
          </tr>
        </thead>
        <tbody>
          {journeyComponentRows.map((row) => (
            <tr key={row.id}>
              <td>
                <span className={styles.journeyMapNameRow}>
                  <span className={styles.journeyMapName}>{row.name}</span>
                </span>
                <span className={styles.journeyMapTrigger}>
                  <span className={styles.journeyMapTriggerLabel}>Trigger:</span> {row.trigger}
                </span>
              </td>
              <td>
                {row.flows.map((flow, flowIndex) => (
                  <div key={flowIndex} className={styles.journeyMapFlowRow}>
                    {flow.label ? <span className={styles.journeyMapFlowLabel}>{flow.label}:</span> : null}
                    {flow.tags
                      ? flow.tags.map((tag, tagIndex) => (
                          <span key={`${tag.id}-${tagIndex}`} className={styles.journeyMapFlowItem}>
                            <JourneyComponentChip id={tag.id} state={tag.state} />
                            {tagIndex < flow.tags.length - 1 ? <span className={styles.journeyMapFlowArrow}>→</span> : null}
                          </span>
                        ))
                      : null}
                    {flow.note ? <span className={styles.journeyMapFlowNote}>{flow.note}</span> : null}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ArtifactWindow>
  );
}

export default function ArtifactPreview({ type }) {
  if (type === 'inputTree') {
    return <InputSpecBusinessRulesStack />;
  }

  if (type === 'journeyMap') {
    return <JourneyComponentMapArtifact />;
  }

  if (type === 'sandboxDoc') {
    return <SandboxRequirementArtifact />;
  }

  if (type === 'roughBuildGaps') {
    return <GapAnalysisArtifact />;
  }

  if (type === 'componentOptions') {
    return <DesignIterationArtifact />;
  }

  if (type === 'integratedSandbox') {
    return <SandboxIntegrationArtifact />;
  }

  return <ProductionMigrationArtifact />;
}
