const stepReplaceVersion = (html: string): string => {
  return html.replace(
    "<META name=DisplayVersion-PS content=6.11>",
    '<META name="DisplayVersion-WPKS" content="4">'
  );
};

export default stepReplaceVersion;
