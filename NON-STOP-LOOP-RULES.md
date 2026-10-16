# NON-STOP LOOP RULES

## THE RULE: NEVER STOP

After each commit and push, IMMEDIATELY:
1. Find next improvement
2. Implement it
3. Commit
4. Push
5. Repeat

NO verification steps. NO checking. NO git status. NO node --check.

## WHAT TO DO WHEN YOU FEEL LIKE STOPPING:

If you catch yourself about to:
- Run `node --check` → SKIP IT
- Check `git status` → SKIP IT
- Count items → SKIP IT
- Verify current state → SKIP IT
- Think "is this enough?" → SKIP IT
- Look for "next thing" → SKIP IT

Instead, IMMEDIATELY:
- Find next improvement (any improvement)
- Implement it
- Commit
- Push
- Repeat

## THE ONLY VALID "STOP" POINTS:

1. When the user says "stop"
2. When the repo is fully complete (never happens)
3. When a critical error is found (but fix it and continue immediately)

## CURRENT GOAL:

Continue adding improvements to lessons:
- YouTube IDs (keep adding to quizzes/lessons missing them)
- "Làm chặt" sections (for Grade 10-12)
- Check sections (for lessons missing self-assessment)
- Tips sections (for lessons missing key points)
- Exercises (ensure all lessons have at least 4)
- Any other missing content

## IMMEDIATE ACTION:

After commit/push, run:
```bash
python3 << 'PYEOF'
# Find next quick improvement
from pathlib import Path
# ... quick check to find something to fix
PYEOF
```

Then implement → commit → push → repeat
