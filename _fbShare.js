function _fbShare(url, width, height) {
    var facebookURL = 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
    window.open(facebookURL, '', 'width=' + width + ', height=' + height);
}

module.exports = _fbShare;