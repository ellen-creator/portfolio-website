# Content Editing Guide

## Overview
This guide shows you where and how to edit all content on your portfolio website.

---

## 1. Work Page - Case Studies

### Location
`src/data/projects.ts`

### What to Edit
- **Project Title**: `title`
- **Project Subtitle**: `subtitle`
- **Short Description**: `overview`
- **Tags**: `tags` array (e.g., 'UX Design', 'Research')
- **Timeline**: `timeline` (e.g., '3 months')
- **Year**: `year`

### Case Study Structure
Each project follows this 5-part structure:

#### 1. Situation
```javascript
situation: {
  title: 'Situation',
  description: 'What was happening?',
  context: 'Background context',
}
```

#### 2. Problem
```javascript
problem: {
  title: 'Problem',
  description: 'What problems did you identify?',
  painPoints: [
    'Problem 1',
    'Problem 2',
    // ... more pain points
  ],
}
```

#### 3. Solution
```javascript
solution: {
  title: 'Solution',
  description: 'How did you solve it?',
  approach: 'Your approach/methodology',
  tools: ['Figma', 'React', 'TypeScript'], // Tools used
}
```

#### 4. Implementation
```javascript
implementation: {
  title: 'Implementation',
  description: 'How did you implement it?',
  changes: [
    {
      before: 'What was it before?',
      after: 'What changed?',
      explanation: 'Why this change matters',
    },
    // ... more changes
  ],
}
```

#### 5. Impact
```javascript
impact: {
  title: 'Impact',
  description: 'What were the results?',
  metrics: [
    { label: 'Metric Name', value: '60', unit: '%' },
    { label: 'Another Metric', value: '80', unit: '%' },
  ],
  testimonial: 'Optional quote from someone',
}
```

#### Learnings
```javascript
learnings: [
  'Key learning 1',
  'Key learning 2',
  'Key learning 3',
]
```

### Example Project
See the `vori` project in `projects.ts` for a complete example.

### How to Add a New Project
1. Copy the template project (the second one in the array)
2. Rename `id` to something unique (e.g., 'project-3')
3. Fill in all sections with your project details
4. Save the file

---

## 2. Home Page - Hero & About

### Location
`src/pages/Home.tsx`

### Hero Section
Line ~35: Change the introduction text
```javascript
<p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
  [Your intro text here]
</p>
```

### About Section
Lines ~100-108: Update your background story
```javascript
<div className="space-y-4 text-slate-700 font-light leading-relaxed">
  <p>[Paragraph 1]</p>
  <p>[Paragraph 2]</p>
  <p>[Paragraph 3]</p>
</div>
```

### Email
Line ~121: Change your email address
```javascript
href="mailto:your-email@example.com"
```

---

## 3. Story/Private Page - Personal Narratives

### Location
`src/pages/Private.tsx`

### How to Edit
Each story entry has:
```javascript
{
  date: '2026-09-23',
  title: 'Story Title',
  content: 'Your story content here...',
}
```

### Add a New Story
1. Add a new object to the `entries` array
2. Set `date` (YYYY-MM-DD format)
3. Set `title` and `content`

---

## 4. Navigation & Site Text

### Location
`src/App.tsx`

### Main Title
Line ~24: "Suhyun Lim"

### Contact Section
Line ~119 in Home.tsx: "Get in Touch"

---

## 5. Project Images

### Where to Put Images
`public/images/projects/`

### How to Reference
In `projects.ts`, set:
```javascript
thumbnail: '/images/projects/your-image.jpg'
```

---

## 6. Styling & Colors

### Light Mode (Work Page)
- Background: White
- Text: Slate gray
- Accents: See `tailwind.config.js`

### Dark Mode (Story Page)
- Background: `#0f1419` (dark navy)
- Text: White
- Accents: Lighter tones

### Change Colors
Edit `tailwind.config.js` in the `colors` section.

---

## Quick Tips

✅ **Always use English** for all content
✅ **Save file** and dev server auto-reloads
✅ **Format dates** as YYYY-MM-DD
✅ **Use markdown-style** punctuation (e.g., en-dashes, proper quotes)
✅ **Keep line length readable** (max ~60 words per sentence)

---

## File Structure Reference

```
src/
├── pages/
│   ├── Home.tsx          ← Hero + About + Contact
│   ├── Private.tsx       ← Personal Stories (dark mode)
│   └── ProjectDetail.tsx ← Case Study detail view
├── components/
│   └── ProjectCard.tsx   ← Project preview card
└── data/
    └── projects.ts       ← All case study content
```

---

## Questions?

Each file has comments (`//`) explaining sections. Look for `TODO` comments for areas meant to be customized.
