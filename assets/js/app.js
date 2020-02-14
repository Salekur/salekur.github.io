// hide and display manage
function ShowContent (ContentID) {
    document.getElementById(ContentID).style.display = "block";
}
function HideContent (ContentID) {
    document.getElementById(ContentID).style.display = "none";
}
function AlternateContent (HideID, ShowID) {
    HideContent(HideID);
    ShowContent(ShowID);
}
function TransferLink(url) {
    var NewPage = window.open(url, '_blank');
    NewPage.focus();
}