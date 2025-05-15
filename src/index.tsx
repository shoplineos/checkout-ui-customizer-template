render('Checkout::Dynamic::Render', (props) => {
  const { i18n, extension } = props;
  const { extensionPoint } = extension;

  return <Banner title={i18n.translate('welcome', { extensionPoint })} />;
});
