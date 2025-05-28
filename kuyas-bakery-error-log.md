# 🧁 Kuya’s Bakery – Error Log & Fixes

---

## 🐛 Error Template (Duplicate this section for each new error)

**Error Title:**  
_Tailwind Init Fails with Node 23_

**Date:**  
May 21, 2025

**File or Context:**  
Running `npx tailwindcss init -p` in Terminal

**Full Error Message:**  

npm error could not determine executable to run

**What Caused It:**  
Node.js v23 is experimental and incompatible with Tailwind’s CLI tools

**How I Fixed It:**  
Switched to stable Node version:
```bash
nvm install 20.11.1
nvm use 20.11.1

Screenshot or Code (optional):
(Paste snippet or drop screenshot here if helpful)


⸻

✅ General Notes & Reminders
	•	Always use Node.js LTS (v18 or v20)
	•	If Tailwind isn’t working, double check:
	•	tailwind.config.js content paths
	•	@tailwind directives in globals.css
	•	That the dev server has been restarted
	•	For Framer Motion + TS:

<motion.div {...({} as React.HTMLAttributes<HTMLDivElement>)} />


⸻

⭐ Things I Learned
	•	How to switch between Node versions using nvm
	•	That Next.js with /src requires Tailwind paths to include /src/app, /src/components, etc.
	•	DaisyUI provides beautiful button classes like btn btn-primary

⸻

🪄 Quick Tips & Commands

Task	Command
Install Tailwind	npm install -D tailwindcss postcss autoprefixer
Init Tailwind config	npx tailwindcss init -p
Install DaisyUI	npm install daisyui
Use stable Node version	nvm install 20.11.1 && nvm use 20.11.1
Restart Dev Server	npm run dev


⸻

✅ Next Steps Log (optional)

Date	Step	Status
May 21	Project setup with Tailwind	✅ complete
May 21	DaisyUI integration	✅ complete
May 22	MongoDB & Products API	⏳ pending

