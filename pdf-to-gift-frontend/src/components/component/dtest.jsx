
export function Dtest() {
  return (
    (<div
      className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="max-w-3xl w-full px-4 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle>PDF to GIFT Converter</CardTitle>
            <CardDescription>Extract text from PDF files and convert it to the GIFT format.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pdf-file">PDF File</Label>
                <Input id="pdf-file" type="file" accept=".pdf" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="page-range">Page Range</Label>
                <div className="flex items-center gap-2">
                  <Input id="page-range" type="text" placeholder="e.g. 1-5, 10, 15-20" />
                  <Button variant="outline">
                    <MaximizeIcon className="h-4 w-4" />
                    <span className="sr-only">Select all pages</span>
                  </Button>
                </div>
              </div>
            </div>
            <Button type="submit">Convert to GIFT</Button>
          </CardContent>
        </Card>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>GIFT Output</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                id="gift-output"
                placeholder="The converted GIFT text will be displayed here."
                rows={10}
                readOnly />
              <Button variant="outline">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download GIFT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>)
  );
}

function DownloadIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>)
  );
}


function MaximizeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
