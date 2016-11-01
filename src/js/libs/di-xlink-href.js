export default function(ngModule) {
  const ATTR_NAME = 'xlink:href';
  ngModule.directive('diXlinkHref', function diXlinkHref() {
    return {
      priority: 99,
      restrict: 'A',
      link: function diXlinkHrefLink(scope, element, attrs) {
        scope.$watch(() => attrs.diXlinkHref, diXlinkChange);

        function diXlinkChange(value) {
          if (!value) {
            return;
          }
          element.attr(ATTR_NAME, value);
        }
      },
    };
  });
}
