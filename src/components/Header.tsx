// src/components/Header.tsx
export default function Header() {
  return (
    <header className="flex justify-between items-center mb-2">
      <div className="text-left">
        <h1 id="ui-title" className="m-0 text-3xl font-bold text-primary">
          Vocabulary Trainer
        </h1>
        <p id="ui-subtitle" className="m-0 text-secondary font-normal">
          Oxford Words & Phrasals
        </p>
      </div>
      <div id="lang-switcher-wrapper" className="pr-2">
        {/* We will add the language switcher logic later */}
      </div>
    </header>
  );
}
