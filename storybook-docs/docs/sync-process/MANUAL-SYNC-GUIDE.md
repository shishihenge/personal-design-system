# 🎨 Manual Token Sync Process

## 📅 Weekly Sync Schedule

- **Monday Morning**: Full token sync
- **Wednesday Check**: Quick color check
- **Friday Afternoon**: Final sync before weekend

## 🔄 Sync Steps (10 Minutes Total)

### Step 1: Export from Figma (3 min)

1. Open Figma design system file
2. **For Colors**: Variables → Click "..." → Export as JSON → Save to `figma-export/colors.json`
3. **For Typography**: Text Styles panel → Export as JSON → Save to `figma-export/typography.json`
4. **For Spacing**: (If using Variables) Export spacing variables to `figma-export/spacing.json`

### Step 2: Run Transform Script (1 min)

```bash
npm run tokens:sync
```
