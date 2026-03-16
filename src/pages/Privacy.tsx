const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          PortraitPop Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          <span className="font-semibold">Last updated:</span> March 16, 2026
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            PortraitPop (&quot;we&quot;) lets you create AI-generated professional portraits from your photos.
            This policy explains what data we use.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Data we use</h2>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
            <li>
              <span className="font-semibold">Your photo:</span> When you generate a portrait, you provide a photo. This
              photo is sent to our servers and to <span className="font-semibold">Google&apos;s Gemini AI</span> to
              create your portrait. Google&apos;s use of data is subject to{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://ai.google.dev/terms"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Google AI terms
              </a>
              .
            </li>
            <li>
              <span className="font-semibold">No account:</span> You do not need to create an account or log in. Payment
              is handled by the app store (Google Play or Apple).
            </li>
            <li>
              <span className="font-semibold">Generated portrait:</span> The resulting image is returned to your device
              only. We do not store generated portraits on our servers.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Your choices</h2>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
            <li>Do not use the app if you do not want your photo sent to our servers and Google AI.</li>
            <li>After generation, use &quot;Save to photos&quot; to keep a copy on your device.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about this policy, contact{" "}
            <a
              href="mailto:zaplatform@gmail.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              zaplatform@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default Privacy;

